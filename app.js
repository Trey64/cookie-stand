'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


var cookiesTable = document.getElementById('cookies');

//  Constructor function.
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
  this.render = function(){
    var cookieRender = document.getElementById('cookies');
    this.calcCookiesSoldEachHour();
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
      cookieRender.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookiesPerDay + ' cookies';
    cookieRender.appendChild(liEl);
  };
    this.render(cookieShops);
    cookieShops.push(this);
  }

  var cookieShops = [];
  new StoreByLocation('Pike', 23, 65, 6.3);
  new StoreByLocation('SeaTac Airport', 3, 24, 1.2);
  new StoreByLocation('Seattle Center', 23, 65, 6.3);
  new StoreByLocation('Capitol Hill', 23, 65, 6.3);
  new StoreByLocation('Alki', 23, 65, 6.3);

console.table(cookieShops);


// 'use strict';
//
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//
// var cookieShops = [];
//
// var cookiesTable = document.getElementById('cookies');
//
// // Constructor function.
// function StoreByLocation(name, minCust, maxCust, avgPerCust){
//   this.name = name;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgPerCust = avgPerCust;
//   this.hourlyCookies = [];
//
//   this.customersEachHour = function(minCust, maxCust) {
//     cookieShops.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
//   }
//   this.cookiesEachHour = function(){
//     for(var i = 0; i < hours.length; i++) {
//       var cookiesPer = Math.floor(this.avgPerCust * this.customersEachHour());
//       this.hourlyCookies.push(cookiesPer);
//     }
//     return this.hourlyCookies;
//   };
//   this.cookiesPerDay = function(){
//       var total = 0;
//       for(var i = 0; i < this.hourlyCookies.length; i++) {
//         total += this.hourlyCookies[i];
//
//       }
//       return total;
//     };
//     this.render = function() {
//       var cookieRender = document.getElementById('cookies');
//       for(var i = 0; i < hours.length; i++) {
//         var liEl = document.createElement('li');
//         liEl.textContent = hours[i] + ': ' + this.hourlyCookies[i] + ' cookies per hour';
//         cookieRender.appendChild(liEl);
//       }
//     };
//
//
//   this.customersEachHour();
//   this.cookiesEachHour();
//   this.render(cookieShops);
//   cookieShops.push(this);
// }
//
// new StoreByLocation('Pike', 23, 65, 6.3);
// new StoreByLocation('SeaTac Airport', 3, 24, 1.2);
// new StoreByLocation('Seattle Center', 23, 65, 6.3);
// new StoreByLocation('Capitol Hill', 23, 65, 6.3);
// new StoreByLocation('Alki', 23, 65, 6.3);
//
//
//
// // table header
// function makeHeaderRow(){
//   var trEl = document.createElement('tr');
//
//   var thEl = document.createElement('th');
//   thEl.textContent = 'Name';
//   trEl.appendChild(thEl);
//
//   thEl = document.createElement('th');
//   thEl.textContent = 'Color';
//   trEl.appendChild(thEl);
//
//   thEl = document.createElement('th');
//   thEl.textContent = 'Tail Size';
//   trEl.appendChild(thEl);
//
//   cookiesTable.appendChild(trEl);
// }
//
//
//
// console.table(cookieShops);
//
// // // 1st and Pike
// // var pike = {
// //   name: '1st and Pike',
// //   minCust: 23,
// //   maxCust: 65,
// //   avgPerCust: 6.3,
// //   hourlyCookies: [], //Empty array to add method return into
// //   customersEachHour: function(minCust, maxCust) {
// //     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
// //   },
// //   cookiesEachHour: function(){
// //     for(var i = 0; i < hours.length; i++) {
// //       var cookiesPer = Math.floor(this.avgPerCust * this.customersEachHour());
// //       this.hourlyCookies.push(cookiesPer);
// //     }
// //     return this.hourlyCookies;
// //   },
// //   cookiesPerDay: function(){
// //     var total = 0;
// //     for(var i = 0; i < this.hourlyCookies.length; i++) {
// //       total += this.hourlyCookies[i];
// //
// //     }
// //     return total;
// //   },
// //   var total = document.getElementById('pike');
// //   var liEl = document.createElement('li');
// //   liEl.textContent = 'Total - ' + pike.cookiesPerDay(total) + ' cookies sold';
// //   total.appendChild(liEl);
// // }
// // };
// //
// // pike.customersEachHour();
// // pike.cookiesEachHour();
// // pike.render();
// //
// //
// // //SeaTac Airport
// // var seatac = {
// //   name: 'SeaTac Airport',
// //   minCust: 3,
// //   maxCust: 24,
// //   avgPerCust: 1.2,
// //   hourlyCookies: [], //Empty array to add method return into
// //   customersEachHour: function(minCust, maxCust) {
// //     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
// //   },
// //   cookiesEachHour: function(){
// //     for(var i = 0; i < hours.length; i++) {
// //       var cookiesPer = Math.floor(this.avgPerCust * this.customersEachHour());
// //       this.hourlyCookies.push(cookiesPer);
// //     }
// //     return this.hourlyCookies;
// //   },
// //   cookiesPerDay: function(){
// //     var total = 0;
// //     for(var i = 0; i < this.hourlyCookies.length; i++) {
// //       total += this.hourlyCookies[i];
// //
// //     }
// //     return total;
// //   },
// // render: function() {
// //   var seatacUL = document.getElementById('seatac');
// //   for(var i = 0; i < hours.length; i++) {
// //     var liEl = document.createElement('li');
// //     liEl.textContent = hours[i] + ': ' + seatac.hourlyCookies[i] + ' cookies per hour';
// //     seatacUL.appendChild(liEl);
// //   }
// //   var total = document.getElementById('seatac');
// //   var liEl = document.createElement('li');
// //   liEl.textContent = 'Total - ' + seatac.cookiesPerDay(total) + ' cookies sold';
// //   total.appendChild(liEl);
// // }
// // };
// //
// // seatac.customersEachHour();
// // seatac.cookiesEachHour();
// // seatac.render();
// //
// //
// // //Seattle Center
// // var seacenter = {
// //   name: 'Seattle Center',
// //   minCust: 11,
// //   maxCust: 38,
// //   avgPerCust: 3.7,
// //   hourlyCookies: [], //Empty array to add method return into
// //   customersEachHour: function(minCust, maxCust) {
// //     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
// //   },
// //   cookiesEachHour: function(){
// //     for(var i = 0; i < hours.length; i++) {
// //       var cookiesPer = Math.floor(this.avgPerCust * this.customersEachHour());
// //       this.hourlyCookies.push(cookiesPer);
// //     }
// //     return this.hourlyCookies;
// //   },
// //   cookiesPerDay: function(){
// //     var total = 0;
// //     for(var i = 0; i < this.hourlyCookies.length; i++) {
// //       total += this.hourlyCookies[i];
// //
// //     }
// //     return total;
// //   },
// // render: function() {
// //   var seacenterUL = document.getElementById('seacenter');
// //   for(var i = 0; i < hours.length; i++) {
// //     var liEl = document.createElement('li');
// //     liEl.textContent = hours[i] + ': ' + seacenter.hourlyCookies[i] + ' cookies per hour';
// //     seacenterUL.appendChild(liEl);
// //   }
// //   var total = document.getElementById('seacenter');
// //   var liEl = document.createElement('li');
// //   liEl.textContent = 'Total - ' + seacenter.cookiesPerDay(total) + ' cookies sold';
// //   total.appendChild(liEl);
// // }
// // };
// //
// // seacenter.customersEachHour();
// // seacenter.cookiesEachHour();
// // seacenter.render();
// //
// //
// //
// //
// // //Capitol Hill
// // var capitol = {
// //   name: 'Capitol Hill',
// //   minCust: 20,
// //   maxCust: 38,
// //   avgPerCust: 2.3,
// //   hourlyCookies: [], //Empty array to add method return into
// //   customersEachHour: function(minCust, maxCust) {
// //     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
// //   },
// //   cookiesEachHour: function(){
// //     for(var i = 0; i < hours.length; i++) {
// //       var cookiesPer = Math.floor(this.avgPerCust * this.customersEachHour());
// //       this.hourlyCookies.push(cookiesPer);
// //     }
// //     return this.hourlyCookies;
// //   },
// //   cookiesPerDay: function(){
// //     var total = 0;
// //     for(var i = 0; i < this.hourlyCookies.length; i++) {
// //       total += this.hourlyCookies[i];
// //
// //     }
// //     return total;
// //   },
// // render: function() {
// //   var capitolUL = document.getElementById('capitol');
// //   for(var i = 0; i < hours.length; i++) {
// //     var liEl = document.createElement('li');
// //     liEl.textContent = hours[i] + ': ' + capitol.hourlyCookies[i] + ' cookies per hour';
// //     capitolUL.appendChild(liEl);
// //   }
// //   var total = document.getElementById('capitol');
// //   var liEl = document.createElement('li');
// //   liEl.textContent = 'Total - ' + capitol.cookiesPerDay(total) + ' cookies sold';
// //   total.appendChild(liEl);
// // }
// // };
// //
// // capitol.customersEachHour();
// // capitol.cookiesEachHour();
// // capitol.render();
// //
// //
// //
// // //Alki
// // var alki = {
// //   name: 'Alki',
// //   minCust: 2,
// //   maxCust: 16,
// //   avgPerCust: 4.6,
// //   hourlyCookies: [], //Empty array to add method return into
// //   customersEachHour: function(minCust, maxCust) {
// //     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
// //   },
// //   cookiesEachHour: function(){
// //     for(var i = 0; i < hours.length; i++) {
// //       var cookiesPer = Math.floor(this.avgPerCust * this.customersEachHour());
// //       this.hourlyCookies.push(cookiesPer);
// //     }
// //     return this.hourlyCookies;
// //   },
// //   cookiesPerDay: function(){
// //     var total = 0;
// //     for(var i = 0; i < this.hourlyCookies.length; i++) {
// //       total += this.hourlyCookies[i];
// //
// //     }
// //     return total;
// //   },
// // render: function() {
// //   var alkiUL = document.getElementById('alki');
// //   for(var i = 0; i < hours.length; i++) {
// //     var liEl = document.createElement('li');
// //     liEl.textContent = hours[i] + ': ' + alki.hourlyCookies[i] + ' cookies per hour';
// //     alkiUL.appendChild(liEl);
// //   }
// //   var total = document.getElementById('alki');
// //   var liEl = document.createElement('li');
// //   liEl.textContent = 'Total - ' + alki.cookiesPerDay(total) + ' cookies sold';
// //   total.appendChild(liEl);
// // }
// // };
