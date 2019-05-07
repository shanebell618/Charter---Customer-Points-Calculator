//DATA
const orders = [{
    customerID: 1,
    name: 'Jon',
    month: 'January',
    total: 314,
    points: 0
  },
  {
    customerID: 2,
    name: 'Mary',
    month: 'January',
    total: 67,
    points: 0
  },
  {
    customerID: 3,
    name: 'Steve',
    month: 'January',
    total: 89,
    points: 0
  },
  {
    customerID: 1,
    name: 'Jon',
    month: 'January',
    total: 222,
    points: 0
  },
  {
    customerID: 2,
    name: 'Mary',
    month: 'January',
    total: 367,
    points: 0
  },
  {
    customerID: 3,
    name: 'Steve',
    month: 'February',
    total: 181,
    points: 0
  },
  {
    customerID: 1,
    name: 'Jon',
    month: 'February',
    total: 178,
    points: 0
  },
  {
    customerID: 2,
    name: 'Mary',
    month: 'February',
    total: 124,
    points: 0
  },
  {
    customerID: 3,
    name: 'Steve',
    month: 'February',
    total: 122,
    points: 0
  },
  {
    customerID: 1,
    name: 'Jon',
    month: 'February',
    total: 97,
    points: 0
  },
  {
    customerID: 2,
    name: 'Mary',
    month: 'February',
    total: 219,
    points: 0
  },
  {
    customerID: 3,
    name: 'Steve',
    month: 'March',
    total: 420,
    points: 0
  },
  {
    customerID: 1,
    name: 'Jon',
    month: 'March',
    total: 178,
    points: 0
  },
  {
    customerID: 2,
    name: 'Mary',
    month: 'March',
    total: 340,
    points: 0
  },
  {
    customerID: 3,
    name: 'Steve',
    month: 'March',
    total: 362,
    points: 0
  },
  {
    customerID: 1,
    name: 'Jon',
    month: 'March',
    total: 68,
    points: 0
  },
  {
    customerID: 2,
    name: 'Mary',
    month: 'March',
    total: 466,
    points: 0
  },
  {
    customerID: 3,
    name: 'Steve',
    month: 'March',
    total: 61,
    points: 0
  }
];



//Initialize points, max points (if 100+), totals array and the empty string that will become row output
var points = 0;
var maxPoints = 50;
var myTotals = [];
var customerRow = "";

//Loop through all orders and calculate total points for each transaction
for (let order of orders) {
  var total = order.total;
  if (total > 50 && total <= 100) {
    var remainder = total - 50;
    points = remainder;
  } else if (total - 100 > 0) {
    var remainder = total - 100;
    points = remainder * 2;
    points += maxPoints;
  } else if (remainder === 1) {
    points = 2;
  } else {
    points = 0;
  }

  //Store our view for each transaction row
  customerRow += "<div class='divTableRow'>" +
    "<div class='divTableCell'>" + order.name + "</div>" +
    "<div class='divTableCell'>" + order.month + "</div>" +
    "<div class='divTableCell'>$" + order.total + "</div>" +
    "<div class='divTableCell'>" + points + "</div>" +
    "</div>";


  //Push the points into the totals array
  var myID = order.customerID;
  var myName = order.name;

  myTotals.push({
    ID: myID,
    name: myName,
    points: points
  });
}

//Add up each customers total points and put them into the "t" array
var t = [];
myTotals.forEach((v) => {
  if (t[v.ID]) {
    t[v.ID] = t[v.ID] + parseFloat(v.points);
  } else {
    t[v.ID] = parseFloat(v.points);
  }
});

//Remove any undefined array entries
t = t.filter(function(element) {
  return element !== undefined;
});

//Loop through and create the view for each customers total points
var i;
var text = "";
for (i = 0; i < t.length; i++) {
  text += "<h3>" + myTotals[i].name + " - " + t[i] + " points</h3><br>";
}



//Store our view for the transactions table heading
var tableHeading = "<div class='divTableCell heading'>Name</div> <div class='divTableCell heading'>Month</div> <div class='divTableCell heading'>Transaction Total</div> <div class='divTableCell heading'>Points</div>";

//Output the various sections of the page
document.querySelector('#results').innerHTML = tableHeading + customerRow;
document.querySelector('#totals').innerHTML = text;
