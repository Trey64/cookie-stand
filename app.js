'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgPerCust: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesPerDay: 0;
  render: function() {
    var pikeUl = document.getElementById('pike');
  }
};

pike.render();
