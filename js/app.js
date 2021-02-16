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
  
    // return an integer between min and max
    return Math.floor(Math.random() * (range + 1)) + min;
  }
  
  
let seattle = {
    id: 'seattle',
    location: 'Seattle',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiesPerSale: 6.3,
    totalCookies: 0,
    liArray: [],
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
          this.liArray.push([timeSlots[i], cookieNumber]);
        }
        for (let i = 0; i < this.liArray.length; i++) {
          let target = this.liArray[i]
          let number = target[1];
          this.totalCookies += number;
        }
        this.liArray.push([this.totalCookies])
        let liElem = document.createElement('li');
        liElem.textContent = 'Total' + ' : ' + this.totalCookies + ' cookies';
        ulElem.appendChild(liElem)
        console.log(this.liArray)
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
    liArray: [],
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
          this.liArray.push([timeSlots[i], cookieNumber]);
        }
        for (let i = 0; i < this.liArray.length; i++) {
          let target = this.liArray[i]
          let number = target[1];
          this.totalCookies += number;
        }
        this.liArray.push([this.totalCookies])
        let liElem = document.createElement('li');
        liElem.textContent = 'Total' + ' : ' + this.totalCookies + ' cookies';
        ulElem.appendChild(liElem)
        console.log(this.liArray)
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
    liArray: [],
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
          this.liArray.push([timeSlots[i], cookieNumber]);
        }
        for (let i = 0; i < this.liArray.length; i++) {
          let target = this.liArray[i]
          let number = target[1];
          this.totalCookies += number;
        }
        this.liArray.push([this.totalCookies])
        let liElem = document.createElement('li');
        liElem.textContent = 'Total' + ' : ' + this.totalCookies + ' cookies';
        ulElem.appendChild(liElem)
        console.log(this.liArray)
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
    liArray: [],
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
          this.liArray.push([timeSlots[i], cookieNumber]);
        }
        for (let i = 0; i < this.liArray.length; i++) {
          let target = this.liArray[i]
          let number = target[1];
          this.totalCookies += number;
        }
        this.liArray.push([this.totalCookies])
        let liElem = document.createElement('li');
        liElem.textContent = 'Total' + ' : ' + this.totalCookies + ' cookies';
        ulElem.appendChild(liElem)
        console.log(this.liArray)
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
    liArray: [],
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
          this.liArray.push([timeSlots[i], cookieNumber]);
        }
        for (let i = 0; i < this.liArray.length; i++) {
          let target = this.liArray[i]
          let number = target[1];
          this.totalCookies += number;
        }
        this.liArray.push([this.totalCookies])
        let liElem = document.createElement('li');
        liElem.textContent = 'Total' + ' : ' + this.totalCookies + ' cookies';
        ulElem.appendChild(liElem)
        console.log(this.liArray)
        console.log(this.totalCookies)
  
    },
  };
  // render locations
  seattle.render();
  tokyo.render();
  dubai.render();
  paris.render();
  lema.render();
 


