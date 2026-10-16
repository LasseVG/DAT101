"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let task1Line = "Line 1: ";
for (let i = 1; i <= 10; i++){
    task1Line += i + " ";
}
printOut(task1Line);
task1Line = "Line2: ";
for (let i = 10; i >= 1; i--){
    task1Line += i + " ";
}
printOut(task1Line)
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);
const task2GuessValue = 45;
let task2RandomValue =0;
while (task2RandomValue !== task2GuessValue){
    task2RandomValue = Math.floor(Math.random() * 60) + 1;
}
    printOut( "the random number is: " + task2RandomValue);
printOut(newLine);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);
const task3GuessValue = 45;
let task3RandomValue = 0;
let task3Attempts = 0;
let task3TimeStart = Date.now();
while (task3RandomValue !== task3GuessValue){
    task3RandomValue = Math.floor(Math.random() * 1000000) + 1;
    task3Attempts++;
}
let task3TimeEnd = Date.now();
let task3TimeTaken = (task3TimeEnd - task3TimeStart);
printOut(`The random number is: ${task3RandomValue}`);
printOut(`Number of attempts: ${task3Attempts}`);
printOut(`Time taken: ${task3TimeTaken} ms`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primes = "";

for (let num = 2; num < 200; num++) {
    let isPrime = true;
    let divisor = 2;

    while (divisor < num) {
        if (num % divisor === 0) {
            isPrime = false;
            break;
        }
        divisor++;
    }

    if (isPrime) {
        primes += num + " ";
    }
}

printOut(primes);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++) {
    let line = "";

    for (let col = 1; col <= 9; col++) {
        line += "K" + col + "R" + row + " ";
    }

    printOut(line);
    printOut("<br>");
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const maxScore = 236;

for (let student = 1; student <= 5; student++) {
    let score = Math.floor(Math.random() * maxScore) + 1;
    let percent = score / maxScore * 100;
    let grade;

    if (percent >= 89) {
        grade = "A";
    } else if (percent >= 77) {
        grade = "B";
    } else if (percent >= 65) {
        grade = "C";
    } else if (percent >= 53) {
        grade = "D";
    } else if (percent >= 41) {
        grade = "E";
    } else {
        grade = "F";
    }

    printOut("Student " + student + ": " + score + " points (" + percent.toFixed(1) + "%) = " + grade);
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function matchString(aString, aNumber) {
    let count = 0;
    for (let i = 0; i < aString.length; i++) {
        if (aString.charAt(i) === "" + aNumber) {
            count++;
        }
    }
    return count;
}

let throws = 0;
let foundStraight = false;
let foundThreePairs = false;
let foundTower = false;
let foundYahtzee = false;

do {
    throws++;

    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const d3 = Math.floor(Math.random() * 6) + 1;
    const d4 = Math.floor(Math.random() * 6) + 1;
    const d5 = Math.floor(Math.random() * 6) + 1;
    const d6 = Math.floor(Math.random() * 6) + 1;

    const diceString = "" + d1 + d2 + d3 + d4 + d5 + d6;

    const c1 = matchString(diceString, 1);
    const c2 = matchString(diceString, 2);
    const c3 = matchString(diceString, 3);
    const c4 = matchString(diceString, 4);
    const c5 = matchString(diceString, 5);
    const c6 = matchString(diceString, 6);

    const countString = "" + c1 + c2 + c3 + c4 + c5 + c6;

    if (!foundStraight && matchString(countString, 1) === 6) {
        foundStraight = true;
        printOut("Full straight (1 2 3 4 5 6) after " + throws + " throws: " + diceString + "<br>");
    }

    if (!foundThreePairs && matchString(countString, 2) === 3) {
        foundThreePairs = true;
        printOut("Three pairs after " + throws + " throws: " + diceString + "<br>");
    }

    if (!foundTower && matchString(countString, 4) === 1 && matchString(countString, 2) === 1) {
        foundTower = true;
        printOut("Tower (2 + 4 of a kind) after " + throws + " throws: " + diceString + "<br>");
    }

    if (!foundYahtzee && matchString(countString, 6) === 1) {
        foundYahtzee = true;
        printOut("Yahtzee after " + throws + " throws: " + diceString + "<br>");
    }

} while (!foundStraight || !foundThreePairs || !foundTower || !foundYahtzee);
printOut(newLine);
