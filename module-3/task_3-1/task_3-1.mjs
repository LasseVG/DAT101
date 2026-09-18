"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
const wakeUpTime = 7;
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

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
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

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);
