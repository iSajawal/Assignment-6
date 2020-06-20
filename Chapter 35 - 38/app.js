// //TASK 1 - Current Day and TIme
// function date(){
//     document.write(new Date())
// };
// date();




// //TASK 2 - Name
// var firstName = prompt("Enter First Name")
// var lastName = prompt("Enter Last Name")
// function fullName(a ,  b){
//     var add = a + " " + b
//     return add;
// }
// alert(fullName(firstName, lastName))






// //TASK 3 + Sum Of Numbers
// var val1 = +prompt("Enter First value")
// var val2 = +prompt("Enter second value")

// function sum(a,b){
//     var theSum = a+b
//     return theSum;
// }

// alert(sum(val1, val2))




// //TASK 4 - Calculator
// var val1 = +prompt("Enter First value")
// var val2 = +prompt("Enter second value")
// var opr = prompt("Enter operater value")
// function calc(val1, opr, val2){
//     if(opr ==="+"){
//         return val1 + val2
//     }else if (opr === "-"){
//         return val1- val2
//     }else if (opr === "*"){
//         return val1 * val2
//     }else if (opr === "/"){
//         return val1 / val2
//     }else {
//         return "Incorrect Operation"
//     }
// }
// document.write(calc(val1, opr, val2));




// //TASK 5 - Square 
// var val1 = +prompt("Enter value")
// function sqr(val1 ){
//     var sqr1 = Math.pow(val1, 2);
//     return sqr1;
// }
// alert(sqr(val1));




// //TASK 6 - Factorial
// var val1 = +prompt("Enter value")
// function factorialize(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }  
// alert(factorialize(val1))




// //TASK 7 - Last Input
// var val1 = +prompt("Enter First Number")
// var val2 = +prompt("Enter second Number")
// function myFunction(a,b) {
//    for( var i = a; i <= b ; i++  ){
//     document.write(i + "<br>" )
// }
// }
// myFunction(val1 ,val2);
// var val1 = +prompt("Enter First Number")
// var val2 = +prompt("Enter second Number")
// for( var i = val1; i <= val2 ; i++  ){
//     document.write(i + "<br>" )
// }




// //TASK 8 - Hypotenuse2
// var base = +prompt("Enter base")
// var per = +prompt("Enter perpendicular")
// function hypo(b, p ){
//     function sqr(s){
//         return s*s
//     }
//     var base1 = sqr(b)
//     var per1 = sqr(p)
//     var hypo1 = base1 + per1
//     return Math.sqrt(hypo1)
// }
// document.write(hypo(base, per))




// //TASK 9 - Rectangle Area
// var val1 = 4
// var val2 = 5
// function multiply(a , b){
//     var c = a * b
//     return c
// }
// console.log(multiply(val1, val2))
// console.log(multiply(4,5))




// //TASK 10 - palindrome
// var str = prompt("Enter A Palindrome Word")
// function palindrome(str) {
//     var len = str.length;
//     var mid = Math.floor(len/2);
//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false + ": it is not a palindrome word";
//         }
//     }
//     return true + ": it is a palindrome word";
// }
// document.write(palindrome(str))




// //TASK 11 - Upper case
// str = prompt("Enter a string")
// function uppercase(str){
//   var array1 = str.split(" ");
//   var newarray1 = [];
//   for(var i = 0; i < array1.length; i++){
//       newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
//   }
//   return newarray1.join(" ");
// }
// console.log(uppercase(str));






// //TASK 12 - Find the longest word
// var str =prompt("Enter a few words")
// function find_longest_word(str)
// {
//   var arrMatch = str.match(/\w[a-z]{0,}/g);
//   var result = arrMatch[0];
//   for(var x = 1 ; x < arrMatch.length ; x++)
//   {
//     if(result.length < arrMatch[x].length)
//     {
//     result = arrMatch[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word(str));



// //TASK 13 - Find Occurence
// var str = prompt("Enter string");
// var word = prompt("Enter word");
// function count(a, l) {
//     return a.split(l).length - 1;
// }
// console.log(count(str, word));





// //TASK 14 - Geometrizer
// var radius = +prompt("Enter radius")
// function calcCircumference(a){
//     var b = 2*Math.PI*radius
//     return "The circumference is " + b
// }
// document.write(calcCircumference(radius))
// FOR AREA
// var radius = +prompt("Enter radius")
// function calcArea(a){
//     var b = Math.PI*radius*radius
//     return "The Area is " + b
// }
// document.write(calcArea(radius))