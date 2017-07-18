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
  liEl.textContent = 'Total - ' + pike.cookiesPerDay(total) + ' cookies sold';
  total.appendChild(liEl);
}
};

pike.customersEachHour();
pike.cookiesEachHour();
pike.render();


//SeaTac Airport
var seatac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgPerCust: 1.2,
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
  var seatacUL = document.getElementById('seatac');
  for(var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ': ' + seatac.hourlyCookies[i] + ' cookies per hour';
    seatacUL.appendChild(liEl);
  }
  var total = document.getElementById('seatac');
  var liEl = document.createElement('li');
  liEl.textContent = 'Total - ' + seatac.cookiesPerDay(total) + ' cookies sold';
  total.appendChild(liEl);
}
};

seatac.customersEachHour();
seatac.cookiesEachHour();
seatac.render();


//Seattle Center
var seacenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgPerCust: 3.7,
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
  var seacenterUL = document.getElementById('seacenter');
  for(var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ': ' + seacenter.hourlyCookies[i] + ' cookies per hour';
    seacenterUL.appendChild(liEl);
  }
  var total = document.getElementById('seacenter');
  var liEl = document.createElement('li');
  liEl.textContent = 'Total - ' + seacenter.cookiesPerDay(total) + ' cookies sold';
  total.appendChild(liEl);
}
};

seacenter.customersEachHour();
seacenter.cookiesEachHour();
seacenter.render();




//Capitol Hill
var capitol = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgPerCust: 2.3,
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
  var capitolUL = document.getElementById('capitol');
  for(var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ': ' + capitol.hourlyCookies[i] + ' cookies per hour';
    capitolUL.appendChild(liEl);
  }
  var total = document.getElementById('capitol');
  var liEl = document.createElement('li');
  liEl.textContent = 'Total - ' + capitol.cookiesPerDay(total) + ' cookies sold';
  total.appendChild(liEl);
}
};

capitol.customersEachHour();
capitol.cookiesEachHour();
capitol.render();



//Alki
var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgPerCust: 4.6,
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
  var alkiUL = document.getElementById('alki');
  for(var i = 0; i < hours.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ': ' + alki.hourlyCookies[i] + ' cookies per hour';
    alkiUL.appendChild(liEl);
  }
  var total = document.getElementById('alki');
  var liEl = document.createElement('li');
  liEl.textContent = 'Total - ' + alki.cookiesPerDay(total) + ' cookies sold';
  total.appendChild(liEl);
}
};

alki.customersEachHour();
alki.cookiesEachHour();
alki.render();
