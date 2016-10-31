// Loop over an array of student grades (values from 50-100) and
// outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript


var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var Agrades = [];
var Bgrades = [];
var Cgrades = [];
var Dgrades = [];
var Fgrades = [];

for (var i = 0; i < scores.length; i++) {
  if (scores[i] < 60) {
    // console.log("Your Score is an F", scores[i]);
    Fgrades.push(scores[i]);
    // console.log("F grades", Fgrades);
  } else if
    (scores[i] > 61 && scores[i] < 70 ) {
    // console.log("Your score is a D", scores[i]);
    Dgrades.push(scores[i]);
    // console.log("D grades", Dgrades );
  } else if
    (scores[i] > 71 && scores[i] < 80 ) {
    // console.log("Your score is a C", scores[i]);
    Cgrades.push(scores[i]);
  } else if
    (scores[i] > 81 && scores[i] < 90 ) {
    // console.log("Your score is a B", scores[i]);
    Bgrades.push(scores[i]);
  } else if
    (scores[i] > 91) {
    // console.log("Your score is an A", scores[i] );
    Agrades.push(scores[i]);
  }
};


// && and
// || or
// ! not


// Use console.log to output the following criteria:

// How many of each grade?
var Anum = Agrades.length;
var Bnum = Bgrades.length;
var Cnum = Cgrades.length;
var Dnum = Dgrades.length;
var Fnum = Fgrades.length;

console.log("There are " + Anum + " A grades");
console.log("There are " + Bnum + " B grades");
console.log("There are " + Cnum + " C grades");
console.log("There are " + Dnum + " D grades");
console.log("There are " + Fnum + " F grades");


// What is the lowest grade?
scores.sort(function(a, b){return a-b});
console.log("The lowest grade is: ", scores[0] );
// should be 55
// Sort the numbers in the array in ascending order
// The first item in the array (points[0]) is now the lowest value



// What is the highest grade?
scores.sort(function(a, b){return b-a});
console.log("The highest grade is: ", scores[0]);
// should be 98
// Sort the numbers in the array in descending order
// The first item in the array (points[0]) is now the highest value










