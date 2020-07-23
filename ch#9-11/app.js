// // // 1. Write a program to take “city” name as input from user. If user enters “Karachi”, 
// // // welcome the user like this: "Welcome to city of lights"

var cityName=+prompt("Enter City Name");
if(cityName="Karachi"){
    alert("Welcome to city of lights");
}


// // // 2. Write a program to take “gender” as input from user. If the user is male,
// // //  give the message: Good Morning Sir. If theuser is female, give the message: 
// // // Good Morning Ma’am.

var gender=+prompt("Enter your Gender");
if(gender="male"){
    alert("Good Morning Sir.");
}
else{
   alert("Good Morning Ma'am");
}

// // 3. Write a program to take input color of road traffic signal from user and show

var light = prompt("Enter Traffic SIgnal Light Color")
 if (light=== "Red"| light ==="red"){
     alert("Must Stop")
 }

 if (light=== "Yellow"| light ==="yellow"){
    alert("Ready to move")
}

if (light=== "Green"| light ==="green"){
    alert("Move now")
}

// // 4. Write a program to take input remaining fuel in car (in litres) from user.
// // If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

var currentFuel=prompt("Enter your current Fuel");
if(currentFuel === 0.25){
    alert("Please refill the fuel in your car");

}




//5. 



//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

    //1. OUtput is given condition for variable is true
    //2. No output
    //3. Condition 2 is true
    //4. The cost equals   True
    //5. car is smaller than cat



//6. Write a program to take input the marks obtained in three subjects & total marks. 


var marks1=+prompt("Enter the marks of First subject");
var tMark1=+prompt("Enter the total marks of First subject");
var marks2=+prompt("Enter the marks of Second subject");
var tMark2=+prompt("Enter the total marks of Second subject");
var marks3=+prompt("Enter the marks of Third subject");
var tMark3=+prompt("Enter the total marks of Third subject");

document.write("<h1>Marks Sheet</h1> <br>");

var totalMarks=tMark1+tMark2+tMark3;

document.write("Total marks:"+" "+totalMarks+"<br>");

var obtainedMarks=marks1+marks2+marks3;

document.write("Marks obtained:"+" "+obtainedMarks+"<br>");

var Percentage=(obtainedMarks/totalMarks)*100;

document.write("Percentage:"+" "+Percentage+"<br>");

if(Percentage>=80){
    document.write("Grade: A-One <br>");
    document.write("Remarks: Excellent <br> ");

}
else if(Percentage>=70){
    document.write("Grade: A <br>");
    document.write("Remarks: Good <br>");

}
else if(Percentage>=60){
    document.write("Grade: B <br>");
    document.write("Remarks: You need to improve <br>");

}

if(Percentage<60){
    document.write("Grade:Fail <br>");
    document.write("Remarks: Sorry <br>");

}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


var secretNum=8;

var guessNum=+prompt("Enter your guess");
if(guessNum===secretNum){
    document.write("Bingo! Correct answer");
}

else if(guessNum+1===secretNum){
    document.write("Close enough to the correct answer.");
}

else{
    document.write("Sorry!wrong Number");
}


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var num=+prompt("Enter anu Number!");
if(num%3===0){
    document.write("The number is divisible by 3");
}
else{
    document.write("Sorry!");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var num=+prompt("Enter anu Number!");
 if(num%2===0){
     document.write("Even Number!");
 }
 else{
     document.write("Odd Number!");
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a.  T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


var temperature=+prompt("Enter Tempearature Value.");

if(temperature>40){
    document.write("It is too hot outside.");
}
else if(temperature>30){
    document.write("The Weather today is Normal.");
}
else if(temperature>20){
    document.write("Today’s Weather is cool.");
}
else if(temperature>10){
    document.write("OMG! Today’s weather is so Cool.");
}


// 1. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


var a = prompt("Enter First number");
var b = prompt("Enter Second number");
var operator = prompt("Enter an operator operation(+,-,*,/,%)");
var num1 = Number(a)
var num2 = Number(b)

if (operator === "+"){
    alert ("Your Ans is "+(num1+num2))
}

if (operator === "-"){
    alert ("Your Ans is "+(num1-num2))
}

if (operator === "*"){
    alert ("Your Ans is "+(num1*num2))
}

if (operator === "/"){
    alert ("Your Ans is "+(num1/num2))
}

if (operator === "%"){
    alert ("Your Ans is "+(num1%num2))
}