"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
const wakeUpTime = 8;
const time = 7;
if(wakeUpTime === time) {
    printOut("Take the bus!");
} else if (time === 8) { 
    printOut ("Take the train");
}else{
    printOut("Take the car");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part4Number = 5;
if (part4Number > 0) {
    printOut("The number is positive");
} else if (part4Number < 0) {
    printOut("The number is negative");
} else {
    printOut("The number is zero");
}
printOut(newLine);

printOut("--- Part 6 og 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*const part6Number = Math.floor(Math.random() * 8) + 1;
printOut("photo size = " + part6Number);
if (part6Number >= 8) {
    printOut("Thank you");
} else (part6Number < 1) 
    printOut("The image is too small"); */
const imageMinSize = 4;
const imageMaxSize =6;
const imageUserSize = Math.floor(Math.random() * 8) + 1;
printOut (`Image User Size = ${imageUserSize}`);
if (imageUserSize >= imageMinSize) 
    if (imageUserSize <= imageMaxSize){
    printOut ("thank you");
}
printOut(newLine);

("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("--- Part 8 og 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let arrayMonth = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const noOfMonth = arrayMonth.length;
const monthName = arrayMonth[Math.floor(Math.random() * noOfMonth)];
if (monthName.includes("r")) {
printOut("The month is " + monthName + " and you need to take Vitamin D");
} else {
printOut("The month is " + monthName + " and you do not need to take Vitamin D");
}
printOut(newLine);

switch(monthName){
     case "january":31
     case "march":31
     case "may":31
     case "july":31
     case "august":31
     case "october":31 
     case "december":31
     printOut ("31 Days in a month.")
     break;
     case "february":28
printOut ("28 Days in a month.")
    break;
    default:
printOut ("30 Days in a month.")

}


printOut(newLine);


("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*let ArrayMonth = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const NoOfMonth = ArrayMonth.length;
const MonthName = ArrayMonth[Math.floor(Math.random() * NoOfMonth)];
if (MonthName === "march" || MonthName === "may" || MonthName === "april") {
    printOut("The month is " + MonthName + " The Museum is closed");
} else if (MonthName === "april") {
    printOut("Sorry, the month is april and the main gallery is closed, you are welcome into the premises next door");
} else {
    printOut("The month is " + MonthName + " and the museum is open");
}*/
if (monthName === "March" || (monthName === "May")){
    printOut ("sorry, the gallery is closed")
}else if(monthName === "april"){
printOut ("sorry, the gallery is closed, but you are welcome into the premise next door");
}else{
    printOut("welcome to my gallery");
}
