'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// 1st and Pike
var pike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgPerCust: 6.3,
  hourlyCookies: [], //Empty array to add method return into
  customersEachHour: function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  cookiesEachHour: function(){
    for(var i = 0; i < hours.length; i++) {
      var cookiesPer = Math.floor(this.avgPerCust * this.customersEachHour());
      this.hourlyCookies.push(cookiesPer);
    }
    return this.hourlyCookies;
  },
  cookiesPerDay: function(){
    var total = 0;
    for(var i = 0; i < this.hourlyCookies.length; i++) {
      total += this.hourlyCookies[i];

    }
    return total;
  },
render: function() {
  var pikeUL = document.getElementById('pike');
  for(var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ': ' + pike.hourlyCookies[i] + ' cookies per hour';
    pikeUL.appendChild(liEl);
  }
  var total = document.getElementById('pike');
  var liEl = document.createElement('li');
  liEl.textContent = 'total - ' + pike.cookiesPerDay(total) + ' cookies sold';
  total.appendChild(liEl);
}
};

pike.customersEachHour();
pike.cookiesEachHour();
pike.render();
