"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);
const OrgMatExp = "2 + 3 * 2 - 4 * 6";
const NewMathExp = "2 + 3 * (2 - 4) * 6";
const Part1Answer = 2 + 3 * (2 - 4) * 6;
printOut (OrgMatExp);
printOut (NewMathExp);
printOut (Part1Answer);
printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);
const centimeters = 34;
const meters = 25;
const millimeters = (meters * 1000) + (centimeters * 10);
const millPrInch = 25.4;
const sumPart2 = millimeters / millPrInch;
const roundedSumPart2 = Math.round(sumPart2 * 100) / 100;
printOut("25 meter og 34 centimeter blir til " + roundedSumPart2 + " inches");

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);
const part3days =3;
const part3hours = 12;
const part3minutes = 14;
const part3seconds = 45;
const totalSeconds = (part3days * 24 * 60 * 60) + (part3hours * 60 * 60) + (part3minutes * 60) + part3seconds;
const totalminutes = totalSeconds / 60;
printOut(" 3 dager, 12 timer, 14 minutter og 45 sekunder blir " + totalminutes + " minutter");
printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*"const part4Minutes = 6322.52"
Totaldays = 6322.52 / (24 * 60) = 4.39 days
math.floor(4.39) = 4 whole days
leftoverfraction = 4.39 - wholeDays = 0.39 days
totalhours = leftoverfraction * 24 = 9.37 hours
math.floor(9.37) = 9 whole hours
leftoverfraction = 9.37 - wholeHours = 0.37 hours
totalminutes = leftoverfraction * 60 = 22.52 minutes
wholeminutes = 22.52 minutes
leftoverfraction =22.52 - wholeMinutes = 0.52 minutes
totalseconds = leftoverfraction * 60 = 31.2 seconds
wholeseconds = 31 seconds
let remainder; leftoverfractio*/
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*"const 76NOK = 8.6USD"
"NOKRate =76NOK / 8.6USD" 
"USDRate = 8.6USD / 76NOK"
math.round(NOKRate * 100) / 100 = 8.84 NOK/USD*/

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);