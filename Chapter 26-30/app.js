// // Task 1 - Positive Int

// var input = +prompt('Enter any positive number');
// document.write('number: ' + input + '<br>')
// var round = Math.round(input)
// document.write('round of value: '+ round + '<br>')
// var floor = Math.floor(input)
// document.write('floor value: '+ floor + '<br>')
// var ceil = Math.ceil(input)
// document.write('ceil value: '+ ceil + '<br>')

// // Task 2 - Negative Int

// var input = +prompt('Enter any negative number');
// document.write('number: ' + input + '<br>')
// var round = Math.round(input)
// document.write('round of value: '+ round + '<br>')
// var floor = Math.floor(input)
// document.write('floor value: '+ floor + '<br>')
// var ceil = Math.ceil(input)
// document.write('ceil value: '+ ceil + '<br>')

// // Task 3 - Absolute Value

// var number = +prompt("Enter a value");
// var number1 = Math.abs(number);
// document.write("The Absolute value of " + number + " is " + number1)


// // TASK 4 - Dice 
// var number = Math.floor(Math.random() * 6 ) +1;
// document.write('Random Dice value: ' + number);


// // Task 5- Random Coin

// var toss = Math.floor(Math.random() * 2) + 1
// if( toss === 1){
//     document.write(toss + "<br>" + "Random Coin Value: Heads")
// }else{
//     document.write(toss + "<br>" +"Random Coin Value: Tails")
// }

// // Task 6- Random Numbers

// var number = Math.floor(Math.random() * 100 ) +1;
// document.write('Random number between 1 and 100: ' + number);

// // Task 7 - Weight

// var weight = +prompt('Enter Your Weight');
// var roundWeight = Math.round(weight);
// var ceilWeight = Math.ceil(weight);
// var floorWeight = Math.floor(weight)
// document.write('Weight: ' + weight + '<br>');
// document.write('Weight In Round: ' + roundWeight +  'Kgs'+ '<br>');
// document.write('Weight In Ceil: ' + ceilWeight+ 'Kgs'+ '<br>');
// document.write('Weight In Floor: ' + floorWeight +  'Kilograms'+ '<br>'+ '<br>');
// document.write('Weight of the user is: '+ weight+ ' kgs.' + '<br>')


// // Task 8 - Random Number

// var input = +prompt("Enter a number between 1 to 10")
// var number = Math.floor(Math.random() * 10 ) +1;
// if(number === input){
//     alert('Congrats')
// } else(alert('Try again'))