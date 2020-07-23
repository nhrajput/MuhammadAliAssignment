// // 1. Declare an empty array using JS literal notation to store
// // student names in future.

var stdName=[];

// // 2. Declare an empty array using JS object notation to store
// // student names in future.

var stuName= new Object();

// // 3. Declare and initialize a strings array.

var pets=["cats","dogs","elephants"];

// // 4. Declare and initialize a numbers array.

var marks=[10,5,3,2];

// // 5. Declare and initialize a boolean array.
var booleanArray=[true,false];


// // 6. Declare and initialize a mixed array.

var mixArray=[1,"Naveed",3,"ALi"];

// // 7. Declare and Initialize an array and store available
// // education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// // BS, BCOM, MS, M. Phil., PhD). Show the listed
// // qualifications in your browser like:

var education=["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL","PhD"];
document.write("<h1>Qualifications<h1>");
document.write("<br> 1."+education[0]);
document.write("<br> 2."+education[1]);
document.write("<br> 3."+education[2]);
document.write("<br> 4."+education[3]);
document.write("<br> 5."+education[4]);
document.write("<br> 6."+education[5]);
document.write("<br> 7."+education[6]);
document.write("<br> 8."+education[7]);

// // 8. Write a program to store 3 student names in an array.Take
// // another array to store score of these three students.
// // Assume that total marks are 500 for each student, display
// // the scores & percentages of students like:

var stdNames=["Ali","Asad","Azhar"];
var scores=[300,400,330];
var totalmarks = 500;


document.write("<br> Score of"+" "+stdNames[0]+" "+"is"+" "+scores[0]+" "+".Percentage:"+(scores[0]/totalmarks)*100+"%");
document.write("<br> Score of"+" "+stdNames[1]+" "+"is"+" "+scores[1]+" "+".Percentage:"+(scores[1]/totalmarks)*100+"%");
document.write("<br> Score of"+" "+stdNames[2]+" "+"is"+" "+scores[2]+" "+".Percentage:"+(scores[2]/totalmarks)*100+"%");


// // 9. Initialize an array with color names. Display the array
// // elements in your browser.
// // a. Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.
// // b. Ask the user what color he/she wants to add to the end
// // & add that color to the end of the array. Display the
// // updated array in your browser.
// // c. Add two more color to the beginning of the array.
// // Display the updated array in your browser.
// // d. Delete the first color in the array. Display the updated
// // array in your browser.
// // e. Delete the last color in the array. Display the updated
// // array in your browser.
// // f. Ask the user at which index he/she wants to add a color
// // & color name. Then add the color to desired
// // position/index. . Display the updated array in your
// // browser.
// // g. Ask the user at which index he/she wants to delete
// // color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// // position/index. . Display the updated array in your
// // browser

var colorNames=["red","blue","black","white","yellow"];

var choice=prompt("What color You want to insert at the beginning");

colorNames.unshift(choice);
alert(colorNames);


var choice1=prompt("What color you want to insert at end");

colorNames.push(choice1);
alert(colorNames);

var choice2=prompt("What color 1 You want to insert at the beginning");
var choice3=prompt("What color 2 You want to insert at the beginning");

colorNames.unshift(choice2,choice3);
alert(colorNames);



colorNames.shift();
alert(colorNames);

colorNames.pop();
alert(colorNames);

var update =+prompt("At which index do you want to add color?")
var newColor =prompt(" which color do you want to add on that index?")
color.splice(update,0,newColor)
alert(color+"<br/>");
var dlete =+prompt("At which index do you want to delete color?")
var colorDelete =+prompt(" which color do you want to delete on that index?")
color.splice(dlete, colorDelete);
alert(color+"<br/>");

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var stdScores=[10,30,20,18,28];
document.write("score of student:"+" "+stdScores+"<br>");

stdScores.sort();

document.write("Ordered scores of students are"+" "+stdScores);


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var cities=["karachi","sialkot","lahore","multan","rohri"];
var selectedCities=cities.slice(0,3);
document.write(selectedCities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This" ,"is" ,  "my", "cat"];
document.write("<h1>Array:</h1> "+arr);

document.write("<h1>String:</h1> ");
document.write(arr.join(" "));

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var devices=["keyboard","mouse","printer","monitor"];
document.write("Devices:"+" "+"<br>"+devices+"<br>");
var firstelement=devices.shift();
document.write("Out:"+"<br>"+firstelement+"<br>");
var secondtelement=devices.shift();
document.write("Out:"+"<br>"+secondtelement+"<br>");
var thirdelement=devices.shift();
document.write("Out:"+"<br>"+thirdelement+"<br>");
var forthelement=devices.shift();
document.write("Out:"+"<br>"+forthelement+"<br>");



// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)



var devices=["keyboard","mouse","printer","monitor"];
document.write("Devices:"+" "+"<br>"+devices+"<br>");
var firstelement=devices.pop();
document.write("Out:"+"<br>"+firstelement+"<br>");
var secondtelement=devices.pop();
document.write("Out:"+"<br>"+secondtelement+"<br>");
var thirdelement=devices.pop();
document.write("Out:"+"<br>"+thirdelement+"<br>");
var forthelement=devices.pop();
document.write("Out:"+"<br>"+forthelement+"<br>");


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

var phoneManufacturers=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<form> <select> <option>"+phoneManufacturers[0]+"<br>"+"</option>")
document.write("<option>"+phoneManufacturers[1]+"<br>"+"</option>")
document.write("<option>"+phoneManufacturers[2]+"<br>"+"</option>")
document.write("<option>"+phoneManufacturers[3]+"<br>"+"</option>")
document.write("<option>"+phoneManufacturers[4]+"<br>"+"</option>")
document.write("<option>"+phoneManufacturers[5]+"<br>"+"</option> </select></form>")

