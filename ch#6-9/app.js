// //  Write a program to take a number in a variable, do the required arithmetic to display the following 
// // result in your browser:

var a=10;
document.write("Result:<br> The value of a is:"+" "+a);

document.write("<br>....................................");

a = ++a;

document.write("<br> <br> The value of ++a is:"+" "+a);
document.write("<br> Now the value of a is:"+" "+a);

a=a++;

document.write("<br> <br> The value of a++ is:"+" "+a);

a=a+1;
document.write("<br>  Now the value of a is:"+" "+a);

a = --a;

document.write("<br> <br> The value of --a is:"+" "+a);
document.write("<br> Now the value of a is:"+" "+a);

a=a--;

document.write("<br> <br> The value of a-- is:"+" "+a);
a=a-1;
document.write("<br>  Now the value of a is:"+" "+a);



// 2. What will be the output in variables a, b & result after execution of the following script:

var a = 2; 
var b = 1;
var res= --a - --b + ++b + b--;

document.write("<br>"+res+"<br>");

//first stage --a turns a into 1;

//second stage b turns to 0 and 1-0 = 1;

//third stage 2nd b turns to 2 and the previous result 1 will added with it and becomes 3;

//forth stage 3 is added before decrement in b and becomes 4

//last stage 1 is decremented and result becomes 3




// 3. Write a program that takes input a name from user & greet the user.

var userName=prompt("Enter your name");
alert(" WElcome" +" "+userName+ " to the land of JS!");


/* 5. Write a program to take input a number from user &
display it’s multiplication table on your browser. If user
does not enter a new number, multiplication table of 5
 should be displayed by default.*/

var table = prompt("Enter a number for Table","5")
var x = Number(table);
var num = 1;
document.write(
    x+" x "+num+" = "+ (a*num++)+"<br/>"+
    x+" x "+num+" = "+ (a*num++)+"<br/>"+
    x+" x "+num+" = "+ (a*num++)+"<br/>"+
    x+" x "+num+" = "+ (a*num++)+"<br/>"+
    x+" x "+num+" = "+ (a*num++)+"<br/>"+
    x+" x "+num+" = "+ (a*num++)+"<br/>"+
    x+" x "+num+" = "+ (a*num++)+"<br/>"+
    x+" x "+num+" = "+ (a*num++)+"<br/>"+
    x+" x "+num+" = "+ (a*num++)+"<br/>"+
    x+" x "+num+" = "+ (a*num++)+"<br/>"

)

/* 6. Take
 a) Take three subjects name from user and store them in 3 different variables.
 b) Total marks for each subject is 100, store it in another variable.
 c) Take obtained marks for first subject from user and stored it in different variable.*/

var sub1 = prompt("Enter First Subject Name")
var sub2 = prompt("Enter Second SUbject Name")
var sub3 = prompt("Enter Third SUbject Name")
var sub1Marks = prompt("Enter First Subject Marks")
var a = Number(sub1Marks)
var sub2Marks = prompt("Enter Second Subject Marks")
var b = Number(sub2Marks)
var sub3Marks = prompt("Enter Third Subject Marks")
var c= Number(sub3Marks)
var totalMarks = 100

document.write(
              "<table>"+
              "<tr><th>Subject</th><th> Total Marks</th><th> Obtained Marks</th><th> Percentage</th></tr>"+
              "<tr><td>"+sub1+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+
              " %</td></tr>"+"<tr><td>"+sub2+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
              "<tr><td>"+sub3+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
             "<tr><td></td><td>"+(totalMarks*3)+"</td><td>"+(a+b+c)+"</td><td>"+((a+b+c)/(totalMarks*3)*100)+" %</td></tr>"+
             "</table>"
             )


























