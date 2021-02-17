let timeSlots = [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
  ];
let place = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];  
  
function randomInRange(min, max) {
    let range = max - min;

    return Math.floor(Math.random() * (range + 1)) + min;
  };


  
function CookieStand (id, location, min, max, avgCookiesPerSale, cookieSales = []) {
  this.id = id;
  this.location = location;
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookieSales = cookieSales;
  this.storeTotal = 0;
}
let standA = new CookieStand('seattle', 'Seattle Cookie', 23, 65, 6.3,);
let standB = new CookieStand('tokyo', 'Tokyo Cookie', 3, 24, 1.2);
let standC = new CookieStand('dubai', 'Dubai Cookie', 11, 38, 3.7);
let standD = new CookieStand('paris', 'Paris Cookie', 20, 38, 2.3);
let standE = new CookieStand('lima', 'Lima Cookie', 2, 16, 4.6);
let allStands = [standA, standB, standC, standD, standE];
;

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
  for (let i = 0; i < timeSlots.length; i++) {
    let salmonCookie = this.calcCookiesPerHour();
    this.cookieSales.push(salmonCookie);
    this.storeTotal += salmonCookie
  }
  this.cookieSales.push(this.storeTotal);
}


CookieStand.prototype.render = function() {
  let ulElem = document.getElementById(this.id);
  for (let i = 0; i < timeSlots.length; i++) {
    let liElem = document.createElement('li');  
    liElem.textContent = timeSlots[i] + ' : ' + this.cookieSales[i] + ' cookies';
    ulElem.appendChild(liElem);

}
  let liElem = document.createElement('li');
  liElem.textContent = 'Total' + ' : ' + this.storeTotal + ' cookies';
  ulElem.appendChild(liElem);

}



for(let i = 0; i < allStands.length; i++) {
  allStands[i].calcCookiesPerHour();
  allStands[i].simulateCookies();
  allStands[i].render();
}

let tableElem = document.getElementById('table');
const row1 = document.createElement('th');


  for (let i = 0; i < timeSlots.length; i++) {
    tableElem.appendChild(row1);
    const sixElem = document.createElement('th');
    sixElem.textContent = timeSlots[i];
    row1.appendChild(sixElem);

    }

    const row2 = document.createElement('tr')
    for (let i = 0; i < timeSlots.length; i++) {
      tableElem.appendChild(row2);
      const sixElem = document.createElement('tr');
      sixElem.textContent = (place)[i];
      row2.appendChild(sixElem);
    }
  // const row2 = document.createElement('tr');
  // const row3 = document.createElement('tr');

  // tableElem.appendChild(row2);
  // tableElem.appendChild(row3);
  // tableElem.appendChild(row4);
  // tableElem.appendChild(row5);
  // tableElem.appendChild(row6);


  // const sixDataElem = document.createElement('tr')
  // row2.appendChild(sixDataElem);
  // sixDataElem.textContent = ('something');









  