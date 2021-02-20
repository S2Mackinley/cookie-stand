'use strict';

let timeSlots = ['6:00AM','7:00AM','8:00AM','9:00am','10:00AM','11:00AM',
'12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM','7:00PM',
'Daily Location Totals' ];

 

  
function randomInRange(min, max) {
    let range = max - min;

    return Math.floor(Math.random() * (range + 1)) + min;
  };


  
function CookieStand (id, location, min, max, avgCookiesPerSale,) {
  this.id = id;
  this.location = location;
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookieSales = [];
  this.storeTotal = 0;
  
}
let locationList = [];

let standA = new CookieStand('seattle', 'Seattle Cookie', 23, 65, 6.3,);
let standB = new CookieStand('tokyo', 'Tokyo Cookie', 3, 24, 1.2);
let standC = new CookieStand('dubai', 'Dubai Cookie', 11, 38, 3.7);
let standD = new CookieStand('paris', 'Paris Cookie', 20, 38, 2.3);
let standE = new CookieStand('lima', 'Lima Cookie', 2, 16, 4.6);
let allStands = [standA, standB, standC, standD, standE];


CookieStand.prototype.generateCustomersPerHour = function() {
  let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
  return customersPerHour;
  }
  for(let i = 0; i < allStands.length; i++) {
    allStands[i].generateCustomersPerHour();
  }

CookieStand.prototype.calcCookiesPerHour = function() {
  let customersPerHour = this.generateCustomersPerHour();
  let cookiesEachHour = customersPerHour * this.avgCookiesPerSale;
  return Math.ceil(cookiesEachHour);
}


CookieStand.prototype.simulateCookies = function() {
  for (let i = 0; i < timeSlots.length - 1; i++) {
    let salmonCookie = this.calcCookiesPerHour();
    this.cookieSales.push(salmonCookie);
    this.storeTotal += salmonCookie
  }
  this.cookieSales.push(this.storeTotal);
}









CookieStand.prototype.render = function() {
  const salesRow = document.createElement('tr');
  const tableElem = document.getElementById('table');
  tableElem.appendChild(salesRow);
  const tableCell = document.createElement('td');
  salesRow.appendChild(tableCell);
  tableCell.textContent = this.location;
  for (let i = 0; i < this.cookieSales.length; i ++) {
    const cookiesElem = document.createElement('td');
    cookiesElem.textContent = this.cookieSales[i];
    salesRow.appendChild(cookiesElem);
  }
}

// create table
function renderHeaderRow(){
const tableElem = document.getElementById('table');
const rowOne = document.createElement('tr');
tableElem.appendChild(rowOne);
const emptyTh = document.createElement('th');
rowOne.appendChild(emptyTh);
for (let i = 0; i < timeSlots.length; i++) {
  const timeHeaderElem = document.createElement('th');
  timeHeaderElem.textContent = timeSlots[i];
  rowOne.appendChild(timeHeaderElem);
  timeHeaderElem.setAttribute('scope', 'col');  
}

}

function renderFooterRow() {
  const tableElem = document.getElementById('table');
  const tableFootElem = document.createElement('tr');
  tableElem.appendChild(tableFootElem);
  
  const totalCookiesElem = document.createElement('th')
  totalCookiesElem.setAttribute('scope', 'row')
  totalCookiesElem.textContent = 'Totals';
  tableFootElem.append(totalCookiesElem);
    for (let i = 0; i < timeSlots.length; i++) {
      let cookieTotalHour = 0;
      for (let j = 0; j < allStands.length; j++) {
          cookieTotalHour += allStands[j].cookieSales[i]
      }
      const cookieTd = document.createElement('td');
      cookieTd.textContent = cookieTotalHour;
      tableFootElem.appendChild(cookieTd);
    }
    

  }
// puts my chart on the page
renderHeaderRow();
for(let i = 0; i < allStands.length; i++) {
  allStands[i].calcCookiesPerHour();
  allStands[i].simulateCookies();
  allStands[i].render();
}
renderFooterRow();



let myform = document.getElementById('new-store-form')
myform.addEventListener("submit", submitHandler)

function submitHandler(event) {
  event.preventDefault();



  let id = event.target.storeName.value;
  let minCustomers = event.target.minCustomers.value
  let maxCustomers = event.target.maxCustomers.value;
  let avgCookies = event.target.avgCookies.value;
  let name = id + ' Cookie'
  let newStand = new CookieStand (id, name, minCustomers, maxCustomers, avgCookies, );
  allStands.push(newStand);
  const tableElem = document.getElementById('table');
  tableElem.innerHTML = '';
renderHeaderRow();
newStand.calcCookiesPerHour();
newStand.simulateCookies();

for(let i = 0; i < allStands.length; i++) {
  allStands[i].render();
}
renderFooterRow();
}

const form = document.getElementById('new-store-form');
  