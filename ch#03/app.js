// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = 24;
alert("I am"+ " " + age + " " + "years old");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You have visited this site N times”.

var trckr;
trckr=+prompt("Enter No of visits");
alert("You have visited this site"+ " "+" "+ trckr +" "+"times");

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

var birthYear;
birthYear=1996;

document.write("My birth year is" + " " + birthYear);
document.write("<br> Data type of my declared variable is number");

// Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order

var visitor="Naveed";
var title="T-shirts";
var Quantity=5;

document.write("<br>");
document.write(visitor+ " "+ "ordered" + " " + Quantity + " "+ title + "(s) on XYZ clothing store");
