'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


var cookiesTable = document.getElementById('cookies');

var cookieShops = [];

//  Constructor function
function StoreByLocation(name, minCustomers, maxCustomers, avgCookiesPerSale){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersEachHour = [];
  this.calcCustomersEachHour = function(){
    for(var i = 0; i < hours.length; i++){
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  };
  this.cookiesSoldEachHour = [];
  this.calcCookiesSoldEachHour = function(){
      this.calcCustomersEachHour();
      for(var i = 0; i < hours.length; i++){
        this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale));
        this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
        console.log(this.totalCookiesPerDay, 'running daily cookie total');
      }
  };
  this.totalCookiesPerDay = 0;

  cookieShops.push(this);

  this.render = function(){
    var trEl = document.createElement('tr');

    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);

    for(var i = 0; i < hours.length; i++){
      var tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldEachHour[i];
      trEl.appendChild(tdEl);
    }

      var tdEl = document.createElement('td');
      tdEl.textContent = this.totalCookiesPerDay;
      trEl.appendChild(tdEl);
      cookiesTable.appendChild(trEl);
    }

    this.calcCookiesSoldEachHour();
  };



  new StoreByLocation('Pike Place', 23, 65, 6.3);
  new StoreByLocation('SeaTac Airport', 3, 24, 1.2);
  new StoreByLocation('Seattle Center', 11, 38, 3.7);
  new StoreByLocation('Capitol Hill', 20, 38, 2.3);
  new StoreByLocation('Alki', 2, 16, 4.6);

// console.table(cookieShops);

function storesinDom(){
  var storelist = document.getElementbyId('id');
  for(var i = 0; i < cookieShops.length; i++){
    var liEl = document.createElement('li')
    lieEl.textContent = cookieShops[i].location;
    storeList.appendChild(lieEl);
  }
}

// table header
function makeHeaderRow(){
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }

  var thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  cookiesTable.appendChild(trEl);
}


function cookieRows(){
  for(var i = 0; i < cookieShops.length; i++){
    cookieShops[i].render();
  }
}

makeHeaderRow();
cookieRows();
