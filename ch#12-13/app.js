// //1. Write a program that takes a character (number or string)
// // in a variable & checks whether the given input is a
// // number, uppercase letter or lower case letter. (Hint: ASCII
// // codes:- A=65, Z=90, a=97, z=122).

var userInput = prompt("Enter a Character ex: a-z,A-Z,0-9")

var ascii = userInput.charCodeAt(0)
if (ascii >= 65 && ascii <= 90){
    alert("you input a Capital letter")
} else if (ascii >= 97 && ascii <=122){
    alert("you input a Small letter")
}else if (ascii >= 48 && ascii <=57){
    alert("you input a number")
}
 else{
    alert ("Wrong Input!");
 }

//  // 2. Write a JavaScript program that accept two integers and
// // display the larger. Also show if the two integers are equal.

var num1=+prompt("Enter First Number");
var num2=+prompt("Enter Second Number");

if(num1>num2){
    alert(num1);
}

else if(num2>num1){
    alert(num2);
}
else if(num1=num2){
   alert(num1+" "+"and"+" "+""+num2+" "+"are equal!");
}
else{
    alert("Sorry!");
}


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var num=+prompt("Enter any number");

if(num>0){
    alert("The number is Positive");
}

else if(num<0){
    alert("The number is Negative");
}

else if(num==0){
    alert("The number is Zero");
}

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

var character=prompt("Enter any character");

if(character==="a"||character==="i"||character==="o"||character==="u"||character==="e"){
    document.write("true")
}
else{
    alert("false");
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise

var pass="N@veed123";

var userPass=prompt("Enter your Password");

if(userPass==false){
    alert("Please enter your password");
}
else if(pass===userPass){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect Password");
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting)}
else{
greeting = "Good evening";
alert(greeting);
}


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time=+prompt("Enter the time.");

if(time>=0000 && time<1200){
    alert("Good morning!");
}
else if(time>=1200 && time<1700){
    alert("Good afternoon!");
}

else if(time>=1700 && time<2100){
    alert("Good evening!");
}
else if(time>=2100 && time<=2359){
    alert("Good night!");
}
