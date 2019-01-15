// 'use strict';

// Object literal notation

// Let's model some Seattle beaches in code! Take a look at the HTML to see which ones. Were going to take the seagull data from that we store in JavaScript and render it into the DOM.

// Let's make note of the name, neighborhood, and seagull count of each beach for each day last week.

// Since we know we'll need days of the week, that is already set up for us.

// var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// var alkiUl = document.getElementById('alkibeach');
// var goldenUl = document.getElementById('gg');
// var edmondsUl = document.getElementById('edmondsbeach');

// var alki = {
//   name: 'Alki',
//   neighborhood: 'West Seattle',
//   seagullCount: [212, 44, 34, 11, 18, 88, 377],
//   render: function() {
//     for (var i = 0; i < days.length; i++) {
//       // 1. Create element to hold the data
//       var liEl = document.createElement('li');
//       // 2. Assign the data to the element
//       liEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls`;
//       console.log('just assigned a value liEl', liEl);
//       // 3. Put the element into the DOM
//       alkiUl.appendChild(liEl);
//     }
//   }
// };

// var goldenGardens = {
//   name: 'Golden Gardens',
//   neighborhood: 'Ballard',
//   seagullCount: [45, 233, 256, 122, 76, 45, 22],
//   render: function () {
//     for (var i = 0; i < days.length; i++) {
//       // 1. Create element to hold the data
//       var liEl = document.createElement('li');
//       // 2. Assign the data to the element
//       liEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls`;
//       console.log('just assigned a value liEl', liEl);
      // 3. Put the element into the DOM
//       goldenUl.appendChild(liEl);
//     }
//   }
// };

// var edmonds = {
//   name: 'Edmonds Beach',
//   neighborhood: 'Edmonds',
//   seagullCount: [88, 687, 89, 24, 56, 22, 65],
//   render: function () {
//     for (var i = 0; i < days.length; i++) {
//       // 1. Create element to hold the data
//       var liEl = document.createElement('li');
//       // 2. Assign the data to the element
//       liEl.textContent = `${days[i]}: ${this.seagullCount[i]} seagulls`;
//       console.log('just assigned a value liEl', liEl);
//       // 3. Put the element into the DOM
//       edmondsUl.appendChild(liEl);
//     }
//   }
// };

// alki.render();
// goldenGardens.render();
// edmonds.render();

'use strict'

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  aveCookiePerCust: 6.3,

  randomCustPerHour: function () {

    return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  averagePerHour: function () {

    return Math.round(this.randomCustPerHour() * this.aveCookiePerCust);
  },

  generateList: function () {

    var ulElement = document.getElementById('first-pike');
    var runningTotal = 0;

    for (var i = 0; i < storeHours.length; i++) {

      var liElement = document.createElement('li');

      var randomNum = this.averagePerHour();
      runningTotal += randomNum;

      liElement.textContent = `${storeHours[i]}: ${randomNum} cookies`;

      ulElement.appendChild(liElement);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total for the day: ${runningTotal} cookies`;
    ulElement.appendChild(totalEl);
  },
};

firstAndPike.generateList();
