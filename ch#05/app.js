// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var a=+prompt("Enter First number");

var b=+prompt("Enter Second number");

var c = a+b;

document.write("Sum of"+ " "+ a + " "+"and"+" "+  b + " "+ "is"+ " "+ c);


// 2. Repeat task1 for subtraction, multiplication, division & modulus.

//Subtraction


var c = a-b;

document.write(" <br> Subtraction of"+ " "+ a + " "+"and"+" "+  b + " "+ "is"+ " "+ c);


//Multiplication


var c = a*b;

document.write("<br> Multiplication of"+ " "+ a + " "+"and"+" "+  b + " "+ "is"+ " "+ c);


//Division

var c = a/b;

document.write("<br> Division of"+ " "+ a + " "+"and"+" "+  b + " "+ "is"+ " "+ c);


// Modulus



var c = a%b;

document.write("<br> Modulus of"+ " "+ a + " "+"and"+" "+  b + " "+ "is"+ " "+ c);


// 3. Do the following using JS Mathematic Expressions

var a;

document.write("<br> Value after variable declaration is:??");

a = 5;

document.write("<br> Initial value:"+ " "+ a);

a = ++a;

document.write("<br> Value after increment is:"+ " "+a);

a = a+7;

document.write("<br> Value after addition is:"+ " "+ a);

a = --a;

document.write("<br> Value after decrement is:"+ " "+a);

a = a%3;

document.write("<br> Remainder is:"+ " "+ a);


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the
// cost of buying 5 tickets to a movie. 


ticketPrice=600;
document.write("<br> Total cost to buy 5 tickets is" + " "+ ticketPrice*5 + " "+ "PKR"); 

// 5. Write a script to display multiplication table of any number

var a = +prompt("Enter the number you want to generate Table");
for(var x=1;x<11;x++)  {  
document.write("<br>"+a + " " + "*" +" " + x + " "+ "="+ " "+ a*x +"<br>");
}

// 6. The Temperature Converter: 

var CT=25;
var farTemp=(CT*9/5)+32;

document.write(CT+" "+"C is"+" "+farTemp+"F"+"<br>");

var FT=70;
var celTemp=(FT-32)*5/9;

document.write(FT+" "+"F is"+" "+celTemp+"C"+"<br>");


// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. 

var price1=+prompt("Enter Price of Item 1");

var quantity1=+prompt("Enter Ordered quantity of Item 1");


var price2=+prompt("Enter Price of Item 2");

var quantity2=+prompt("Enter Ordered quantity of Item 2");

var charges=+prompt("Enter Shipping charges");
    
document.write("<h1>Shopping Cart</h1> <br>")

document.write("Price of item 1 is"+" "+ price1+"<br>");

document.write("Quantity of item 1 is"+" "+ quantity1+"<br>");

document.write("Price of item 2 is"+" "+ price2+"<br>");

document.write("Quantity of item 2 is"+" "+ quantity2+"<br>");

document.write("Shipping Charges"+" "+ charges+"<br>");

var cost=(price1*quantity1)+(price2*quantity2)+charges;

document.write("Total Cost of Your order is"+" "+ cost);

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result.

var totalMarks=+prompt("Enter Total Marks");

var obtMarks=+prompt("Enter Obtained Marks");

var percentage=(obtMarks/totalMarks)*100;

document.write("<h1>Marks Sheet </h1><br>");

document.write("Total Marks:"+" "+ totalMarks+ "<br>");

document.write("Marks Obtained:"+" "+ obtMarks+ "<br>");

document.write("Percentage:"+" "+percentage);


// 9. Write a script to convert the total currency to Pakistani Rupees. i.e. US dollars & Saudi Riyals;

var dollar=104.80;
var riyals=28;
var rupees=(dollar*10)+(riyals*25);

document.write("<h1>Currency in PKR </h1> <br> Total Currency in PKR:"+" "+rupees);

// 10. Write a program to initialize a variable with some number

var m=5;
var n=((m+5)*10)/2;
document.write(n);

// 11. The Age Calculator

var currentYear=2020;
var birthYear=1996;
var age=currentYear-birthYear;

document.write("<h1>Age Calculator</h1> <br> Current Year:"+" "+currentYear+"<br>");
document.write("Birth Year:"+" "+birthYear+"<br>");
document.write("Your Age is:" + " "+ age);


// 12. The Geometrizer: Calculate properties of a circle.


var r=+prompt("Enter the radius of a circle");
var Circumference=2*3.142*r;
var Area=3.142*r*r;

document.write("<h1>The Geometrizer</h1> <br> Radius of a circle:"+" "+r);

document.write("<br> The circumference is:"+" "+Circumference);

document.write("<br> The area is:"+" "+Area);

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? 

var favSnack="Rite";
var currentAge=24;
var maxAge=70;
var estimatedAmount=2;
var remaining=(maxAge-currentAge)*estimatedAmount;

document.write("<h1>The Lifetime Supply Calculator</h1> <br> Favourite Snack:"+" "+favSnack);
document.write("<br> Current age:"+" "+currentAge);
document.write("<br>Estimated Maximum Age:"+" "+maxAge);
document.write("<br>Amount of Snacks Per day:"+" "+estimatedAmount);
document.write("<br> You will need" + " "+remaining+" "+favSnack+" "+"Snacks to last you until the ripe old age of"+" "+maxAge);


