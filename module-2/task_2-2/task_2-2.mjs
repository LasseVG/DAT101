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
printOut(newLine);
const Totaldays =6322.52 / (24*60);
const wholedays = Math.floor(Totaldays);
const remainingHours = Math.floor((Totaldays - wholedays) * 24);
const remainingMinutes = Math.round(((Totaldays - wholedays) * 24 - remainingHours) * 60);
printOut("6322.52 minutter blir til " + wholedays + " dager, " + remainingHours + " timer og " + remainingMinutes + " minutter");

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);
const exhangerate = 8.6;
const amountinUSD = 54;
const amountinNOK = amountinUSD * exhangerate;
printOut(amountinUSD + " USD = " + amountinNOK + " NOK");
printOut(amountinNOK + " NOK = " + amountinUSD + " USD");

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);
const sentence = "there is much between heaven and earth that we do not understand";
const sentenceLength = sentence.length;
printOut("The length of the sentence is: " + sentenceLength);
printOut("The character at position 19 is : " + sentence.charAt(19));
printOut("The substring from position 35 and 8 places is: " + sentence.substring(35, 43));
printOut("the word earth is found at position: " + sentence.indexOf("earth"));
printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);
const result = 5 > 3;
printOut("5 > 3 is " + result); 
const result2 = 7 >= 7;
printOut("7 >= 7 is " + result2);
const result3 = "a" > "b";
printOut('"a" > "b" is ' + result3);
const result4 = "2500" < "abcd";
printOut('"2500" < "abcd" is ' + result4);
const result5 = "arne" !== "thomas";
printOut('"arne" !== "thomas" is ' + result5);
const result6 = (2 === 5) === true;
printOut('(2 === 5) === true is ' + result6);
const result7 = "abcd" > "bcd" === false;
printOut('"abcd" > "bcd" === false is ' + result7);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);
printOut('"254" = ' + Number("254"));
printOut('"57.23" = ' + parseFloat("57.23"));
printOut('"25 kroner" = ' + parseInt("25 kroner"));

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);
const r = Math.floor(Math.random() * 360) + 1;
const r2 = Math.ceil(Math.random() * 360);
printOut("Random number between 1 and 360: " + r2);
/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);
const TotalDays = 131;
const weeks = Math.floor(TotalDays / 7);
const remainingDays = TotalDays % 7;
printOut("131 days is " + weeks + " weeks and " + remainingDays + " days");
