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
  
  
function randomInRange(min, max) {
    let range = max - min;

    return Math.floor(Math.random() * (range + 1)) + min;
  };
 
  
function CookieStand (id, location, min, max, avgCookiesPerSale, totalCookies, simulatedCookiesPerHour) {
  this.id = id;
  this.location = location;
  this.minCustomerPerHour = min;
  this.maxCustomersPerHour = max;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.totalCookies = totalCookies;
  this.simulatedCookiesPerHour = simulatedCookiesPerHour;

}

let standA = new CookieStand('seattle', 'Seattle Cookie Stand', 23, 65, 6.3, 0, [])
let standB = new CookieStand('tokyo', 'Tokyo Cookie Stand', 3, 24, 1.2)
let standB = new CookieStand('dubai', 'Dubai Cookie Stand', 11, 38, 3.7)
let standB = new CookieStand('paris', 'Paris Cookie Stand', 20, 38, 2.3)
let standB = new CookieStand('lima', 'Lima Cookie Stand', 2, 16, 4.6)
console.log(standA)


let seattle = {
  id: 'seattle',
  location: 'Seattle',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerSale: 6.3,
  totalCookies: 0,
  simulatedCookiesPerHour: [],
  generateCustomersPerHour: function () {
    let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
    return customersPerHour;
  },
  calcCookiesPerHour: function () {
    let customersEachHour = this.generateCustomersPerHour();
    let cookiesEachHour = customersEachHour * this.avgCookiesPerSale;
    return Math.ceil(cookiesEachHour);
  },
  render: function () {
    let ulElem = document.getElementById(this.id);
    for (let i = 0; i < timeSlots.length; i++) {
      let cookieNumber = this.calcCookiesPerHour()
      let liElem = document.createElement('li');  
      liElem.textContent = timeSlots[i] + ' : ' + cookieNumber + ' cookies';
      ulElem.appendChild(liElem);
      this.simulatedCookiesPerHour.push([timeSlots[i], cookieNumber]);
    }
    for (let i = 0; i < this.simulatedCookiesPerHour.length; i++) {
      let target = this.simulatedCookiesPerHour[i]
      let number = target[1];
      this.totalCookies += number;
    }
    this.simulatedCookiesPerHour.push([this.totalCookies])
    let liElem = document.createElement('li');
    liElem.textContent = 'Total' + ' : ' + this.totalCookies + ' cookies';
    ulElem.appendChild(liElem)
    console.log(this.simulatedCookiesPerHour)
    console.log(this.totalCookies)

  },
};

  let tokyo = {
    id: 'tokyo',
    location: 'Tokyo',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiesPerSale: 6.3,
    totalCookies: 0,
    simulatedCookiesPerHour: [],
    generateCustomersPerHour: function () {
      let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
      return customersPerHour;
    },
    calcCookiesPerHour: function () {
      let customersEachHour = this.generateCustomersPerHour();
      let cookiesEachHour = customersEachHour * this.avgCookiesPerSale;
      return Math.ceil(cookiesEachHour);
    },
    render: function () {
        let ulElem = document.getElementById(this.id);
        for (let i = 0; i < timeSlots.length; i++) {
          let cookieNumber = this.calcCookiesPerHour()
          let liElem = document.createElement('li');  
          liElem.textContent = timeSlots[i] + ' : ' + cookieNumber + ' cookies';
          ulElem.appendChild(liElem);
          this.simulatedCookiesPerHour.push([timeSlots[i], cookieNumber]);
        }
        for (let i = 0; i < this.simulatedCookiesPerHour.length; i++) {
          let target = this.simulatedCookiesPerHour[i]
          let number = target[1];
          this.totalCookies += number;
        }
        this.simulatedCookiesPerHour.push([this.totalCookies])
        let liElem = document.createElement('li');
        liElem.textContent = 'Total' + ' : ' + this.totalCookies + ' cookies';
        ulElem.appendChild(liElem)
        console.log(this.simulatedCookiesPerHour)
        console.log(this.totalCookies)
  
    },
  };
  
  let dubai = {
    id: 'dubai',
    location: 'Dubai',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiesPerSale: 6.3,
    totalCookies: 0,
    simulatedCookiesPerHour: [],
    generateCustomersPerHour: function () {
      let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
      return customersPerHour;
    },
    calcCookiesPerHour: function () {
      let customersEachHour = this.generateCustomersPerHour();
      let cookiesEachHour = customersEachHour * this.avgCookiesPerSale;
      return Math.ceil(cookiesEachHour);
    },
    render: function () {
        let ulElem = document.getElementById(this.id);
        for (let i = 0; i < timeSlots.length; i++) {
          let cookieNumber = this.calcCookiesPerHour()
          let liElem = document.createElement('li');  
          liElem.textContent = timeSlots[i] + ' : ' + cookieNumber + ' cookies';
          ulElem.appendChild(liElem);
          this.simulatedCookiesPerHour.push([timeSlots[i], cookieNumber]);
        }
        for (let i = 0; i < this.simulatedCookiesPerHour.length; i++) {
          let target = this.simulatedCookiesPerHour[i]
          let number = target[1];
          this.totalCookies += number;
        }
        this.simulatedCookiesPerHour.push([this.totalCookies])
        let liElem = document.createElement('li');
        liElem.textContent = 'Total' + ' : ' + this.totalCookies + ' cookies';
        ulElem.appendChild(liElem)
        console.log(this.simulatedCookiesPerHour)
        console.log(this.totalCookies)
  
    },
  };

  let paris = {
    id: 'paris',
    location: 'Paris',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiesPerSale: 6.3,
    totalCookies: 0,
    simulatedCookiesPerHour: [],
    generateCustomersPerHour: function () {
      let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
      return customersPerHour;
    },
    calcCookiesPerHour: function () {
      let customersEachHour = this.generateCustomersPerHour();
      let cookiesEachHour = customersEachHour * this.avgCookiesPerSale;
      return Math.ceil(cookiesEachHour);
    },
    render: function () {
        let ulElem = document.getElementById(this.id);
        for (let i = 0; i < timeSlots.length; i++) {
          let cookieNumber = this.calcCookiesPerHour()
          let liElem = document.createElement('li');  
          liElem.textContent = timeSlots[i] + ' : ' + cookieNumber + ' cookies';
          ulElem.appendChild(liElem);
          this.simulatedCookiesPerHour.push([timeSlots[i], cookieNumber]);
        }
        for (let i = 0; i < this.simulatedCookiesPerHour.length; i++) {
          let target = this.simulatedCookiesPerHour[i]
          let number = target[1];
          this.totalCookies += number;
        }
        this.simulatedCookiesPerHour.push([this.totalCookies])
        let liElem = document.createElement('li');
        liElem.textContent = 'Total' + ' : ' + this.totalCookies + ' cookies';
        ulElem.appendChild(liElem)
        console.log(this.simulatedCookiesPerHour)
        console.log(this.totalCookies)
  
    },
  };
  
  let lema = {
    id: 'lema',
    location: 'Lema',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiesPerSale: 6.3,
    totalCookies: 0,
    simulatedCookiesPerHour: [],
    generateCustomersPerHour: function () {
      let customersPerHour = randomInRange(this.minCustomersPerHour, this.maxCustomersPerHour);
      return customersPerHour;
    },
    calcCookiesPerHour: function () {
      let customersEachHour = this.generateCustomersPerHour();
      let cookiesEachHour = customersEachHour * this.avgCookiesPerSale;
      return Math.ceil(cookiesEachHour);
    },
    render: function () {
        let ulElem = document.getElementById(this.id);
        for (let i = 0; i < timeSlots.length; i++) {
          let cookieNumber = this.calcCookiesPerHour()
          let liElem = document.createElement('li');  
          liElem.textContent = timeSlots[i] + ' : ' + cookieNumber + ' cookies';
          ulElem.appendChild(liElem);
          this.simulatedCookiesPerHour.push([timeSlots[i], cookieNumber]);
        }
        for (let i = 0; i < this.simulatedCookiesPerHour.length; i++) {
          let target = this.simulatedCookiesPerHour[i]
          let number = target[1];
          this.totalCookies += number;
        }
        this.simulatedCookiesPerHour.push([this.totalCookies])
        let liElem = document.createElement('li');
        liElem.textContent = 'Total' + ' : ' + this.totalCookies + ' cookies';
        ulElem.appendChild(liElem)
        console.log(this.simulatedCookiesPerHour)
        console.log(this.totalCookies)
  
    },
  };
  // render locations
  seattle.render();
  tokyo.render();
  dubai.render();
  paris.render();
  lema.render();
 


