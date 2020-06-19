// // TASK 1 - Greet User

// var fName = prompt('Enter you First Name');
// var lName = prompt('Enter your Last name');
// var fullName = (fName +" "+ lName)
// document.write('Hello '+ fullName+ '. Welcome to assignment 6')


// // TASK 2 - FInd length of User String 

// var favModel = prompt('Enter you favourite mobile model');
// document.write('My favourite phone is :'+ favModel + '<br>');
// document.write('Length of string is :' + favModel.length)


// // TASK 3 - Index of N

// var country = ('Pakistan')
// var n = country.indexOf('n')
// document.write('String: ' + country+ '<br>')
// document.write('Index of N: ' + n)

// // TASK 4 - Index of L

// var message = ('Hello World')
// var l = message.indexOf('l', 4)
// document.write('String: ' + message+ '<br>')
// document.write('Last index of L: ' + l)

// // Task 5 - Character at Index

// var country = ("Pakistani")
// var char= country.charAt(3)
// document.write('String: ' + country+ '<br>')
// document.write("Character at Index 3: " + char)

// // Task 6 - Q1 using String concat () method

// var fName = prompt('Enter you First Name');
// var lName = prompt('Enter your Last name');
// var fullName = fName.concat(lName);
// document.write(fullName)


// // Task 7 - Replace

// var city = 'Hyderabad'
// var rep = city.replace('Hyder', "Islam")
// document.write("City: " + city + "<br>")
// document.write("After replacement: " + rep)

// // Task8 - Again Replace

// var message = ("Ali and Same are best friends. They play cricket and football together.")
// var replace = message.replace(/and/g, "&");
// document.write(replace)


// // Task 9 - String into number
// Number("472")
// var a = 472 
// document.write("Value: " + (a.toString()) + '<br>' + 'Type: String'+ "<br>" )
// document.write( 'Value: ' + 472 + "<br>" + 'Type: number')


// // Task 10 - toUpperCase
// var input = prompt('Enter something here')
// input= input.toUpperCase();
// document.write(input)


// // Task 11 - Title Case
// var input = prompt('Enter something here')
// document.write(input[0].toUpperCase() + input.slice(1).toLowerCase())


// // Task12 - Convert variable to string
// var number = '35.36';
// document.write( 'Number: ' + parseInt(number))

// // Task 13- User Input @,.!

// var userInput = prompt("Enter Username");
// if (userInput = '@') {
//     alert('Enter a valid user name')
// } esleif(userInput = '!');{
//     alert('Enter a valid user name')
// } esleif(userInput = ',');{
//     alert('Enter a valid user name')
// } esleif(userInput = '.');{
//     alert('Enter a valid user name')
// }

// // // Task 14 - Array
// var food = ["cake","apple pie","cookie","chips","patties"];
// var welcome=prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'm");
// var index = food.indexOf(welcome);
// if (index > -1) {
//     document.write(welcome+" is available at index "+(index+1)+" of our bakery");
//     check=true;
// }
// else {
//     document.write("We are sorry "+welcome  +" is not available in our bakery");
// }


// // Task 16- String Split

// var university = 'University of Karachi';
// for(i=0; i<university.length; i++){
//     document.write(university[i] + '<br>')
// }

// // Task 17- Last index
// var input = prompt('Write you input');
// var lastChar = input.length-1
// var lastLet = input.charAt(lastChar)
// document.write('User Input: ' + input+ '<br>')
// document.write('Last character of Input: ' + lastLet)


// Task 18- The quick brown fox

// var string = 'the quick brown fox jumps over the lazy dog';
// var number = (string.match(/the/g) || []).length;
// document.write("Text: " + string + "<br>");
// document.write("There are " + number + " occurrences of word the ");