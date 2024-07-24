//---------Chapter 31 to 34 ------//
//-----------question1---------//

var now = new Date()
 document.write(now)

//-----------question2--------//

var monthArr = ["january" , "february" , "march" , "april" , "may" , "june" , "july" , "august" , "september" , "november" , "december"]
var currentMonth = now.getMonth()
var monthArr = monthArr[currentMonth]
console.log("Current Month : " + monthArr)

//----------question3--------------//

var dayArr = ["monday" , "tuesday" , "wednesday" , "thursday" , "friday" , "saturday" , "sunday"]
var currentDay = now.getDay()
var dayArr = dayArr[currentDay].slice(0,3)
alert("Current Day : " + dayArr)

//------------question4------------//

var dayArr = ["monday" , "tuesday" , "wednesday" , "thursday" , "friday" , "saturday" , "sunday"]
 var currentDay = now.getDay()
 var dayArr = dayArr[currentDay]
 if(dayArr === "saturday" || "sunday"){
    alert("Today is fun day!")
 }

//------------question5--------//

var currentDate = now.getDate()
if(currentDate < 16){
    alert("First fifteen days of month")
}else{
    alert("Last days of month")
}

//----------question6--------//

var milliSec = now.getTime()
var seconds = Math.floor(milliSec / (1000 * 60))
console.log(now);
console.log(milliSec);
console.log(seconds);


//---------question7--------//

var currentTime = now.getHours()
if(currentTime < 12){
    alert("Its AM")
}else{
    alert("Its PM")
}

//-------question8-------//

var laterDate = new Date('2020-12-31T23:59:59')
console.log(laterDate);

//---------question9-----//

var ramadan = new Date('2015-6-18')
var currentDate = new Date()
var diffrentTime = currentDate.getTime()-ramadan.getTime()
var passedDays = Math.floor(diffrentTime / (1000 * 60 * 60 * 24))

console.log("Number pf days passed since 1st Ramadan 2015 : " + passedDays);

//----------question10---------//


var referenceDate = new Date('2024-07-24');
var beginningOf2015 = new Date('2015-01-01');
var timeDiffInSeconds = (referenceDate.getTime() - beginningOf2015.getTime()) / 1000;
console.log("Seconds elapsed between the reference date and the beginning of 2015: " + timeDiffInSeconds + " seconds");


//---------question11---------//


var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);

console.log("Date object one hour ahead: " + currentDate);

//-----------question12-------//


var currentDate = new Date();

currentDate.setFullYear(currentDate.getFullYear() - 100);
console.log("Date reset to 100 years back: " + currentDate);

//---------------question13-------//


var userAge = prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - userAge;
console.log("Your age is : "  + userAge);
console.log("Your birth year is: " + birthYear);

//-----------question14------//


var customerName = prompt("Enter your name:");
var currentMonth = prompt("Enter the current month:");
var numberOfUnits = parseFloat(prompt("Enter the number of units:"));
var chargesPerUnit = parseFloat(prompt("Enter the charges per unit:"));
var latePaymentSurcharge = parseFloat(prompt("Enter the late payment surcharge:"));


var netAmountPayable = numberOfUnits * chargesPerUnit;
netAmountPayable = netAmountPayable.toFixed(2);


var grossAmountPayable = parseFloat(netAmountPayable) + latePaymentSurcharge;
grossAmountPayable = grossAmountPayable.toFixed(2);


document.write("<h2>K-Electric Bill</h2>");
document.write("<p>Customer Name: " + customerName + "</p>");
document.write("<p>Current Month: " + currentMonth + "</p>");
document.write("<p>Number of Units: " + numberOfUnits + "</p>");
document.write("<p>Charges per Unit: " + chargesPerUnit.toFixed(2) + "</p>");
document.write("<p>Net Amount Payable (within Due Date): $" + netAmountPayable + "</p>");
document.write("<p>Late Payment Surcharge: $" + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p>Gross Amount Payable (after Due Date): $" + grossAmountPayable + "</p>");


