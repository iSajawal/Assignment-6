// //Task 1 - Current Date and time (dAt means Date and Time)

// var dAt = new Date()
// document.write(dAt)


// // Task 2 - Current Month
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// var date = new Date();
// var currMonth = month[date.getMonth()];
// alert("Current Month: " + currMonth)


// TASK 3 - Current Day
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var currDay = dayNames[date.getDay()];
// alert("Today is " + currDay)



// // TASK 4 - It's Fun day
// var dayNames = ["Sunday", "Monday", "Tueday", "Wedneday", "Thursday", "Friday", "Saturday"];
// var date = new Date();
// var currDay = dayNames[date.getDay()];
// if(currDay === 0 || currDay === 6){
//     document.write("it's FunDay")
// }else{
//     document.write("It is Working Day")
// }



// //TASK 5 - First 15 days
// var date = new Date();
// if (date <= 15){
//     document.write("First fifteen days of the month ")
// } else{
//     document.write("Last days of the month")
// }


// //TASK 6 - Minutes since 1970
// var date = new Date();
// document.write("Current Date: " + date + "<br>")
// var year = date.getTime();
// document.write("Elapesd milliseconds since January 1, 1970: " + year + "<br>")
// var mint = year/(1000*60)
// document.write("Elapesd minutes since January 1, 1970: " + mint + "<br>")



// //TASK 7 - AM PM
// var date = new Date();
// var hour = date.getTime();
// if(hour < 12){
//     document.write("It's AM")
// }else{
//     document.write("It's PM")
// }



// //TASK 8 - Later Date
// var laterDate = new Date("December 31, 2020");
// document.write("Later Date Of Year: " + laterDate)


// //TASK 9 - Ramadan Date
// var date = new Date().getTime()
// var rdate = new Date("June 18, 2015").getTime();
// var diff = (date - rdate );
// var rdiff = Math.floor(diff / (1000*60*60*24))
// document.write(rdiff + " days have passed since 1st Ramzan 2015." )



// //TASK 10 - Time has passed
// var date = new Date("January 1,2015").getTime()
// var date1 = new Date("December 5, 2015").getTime();
// var diff = (date1 - date );
// var diff1 = Math.floor(diff / (1000*60))
// document.write(diff1 + " days have passed since 1st Ramzan 2015." )



// //TASK 11 - Complicated
// var date = new Date();
// document.write("Curent Date: " + date + "<br>")
// var hour = new Date();
// var hour1 = hour.getHours() - 1
// hour.setHours(hour1)
// document.write( "1 hour ago, it was " + hour)




// //TASK 12 - Date Object
// var date = new Date();
// document.write("Curent Date: " + date + "<br>")
// var backYear = new Date();
// backYear.setFullYear(1920)
// document.write( "100 Years Back, it was " + backYear)




// //TASK 13 - Calculating Year of birth
// var dob = new Date(prompt("Enter Your Birth Year"));
// var dob1 = dob.getTime();
// var today = new Date();
// var today1 = today.getTime();
// var diff = today1 - dob1
// var age = Math.floor(diff/(1000*60*60*30*12*24));
// var birthYear = new Date().getFullYear() - age 
// document.write("Your age is " + age + "<br>");
// document.write("Yor Birth Year is " + birthYear)



// //TASK 14 - K-electric Bill
// var name = prompt("Enter Customer Name");
// var month = prompt("Enter Month Name");
// var unit = +prompt("Enter Used Units");
// var unitPrice = +prompt("Enter Price of units ");
// var charge = 200;
// var billPay = unit*unitPrice;
// var billAfterDate = billPay + charge;
// document.write("<h1>" + "K-Electric Bill " + "</h1>" + "<br>"  );
// document.write("Customer Name: " + name +  "<br>");
// document.write("Current Month: " +  month +  "<br>");
// document.write("Number of units: " +  + unit +  "<br>");
// document.write("Charges per unit: " +  + unitPrice  + "<br>" + "<br>");
// document.write("Net Amount Payable (within Due Date): " + billPay.toFixed(2) + "</h1>" + "<br>");
// document.write("Late Payment Surcharge: " +  charge.toFixed(2) + "<br>");
// document.write("Gross Amount Payable (after Due Date):" + billAfterDate.toFixed(2)  + "<br>");
