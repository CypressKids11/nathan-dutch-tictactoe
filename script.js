let currentTurn = 0;
let gameOver = false;
//data types: INT, DOUBLE, BOOLEAN, CHAR, STRING

// playerturns = 0, 2, 4, 6, 8...
// AI turns = 1, 3, 5, 7, 9...

const button1 = document.getElementById("sq0");
const button2 = document.getElementById("sq1");
const button3 = document.getElementById("sq2");
const button4 = document.getElementById("sq3");
const button5 = document.getElementById("sq4");
const button6 = document.getElementById("sq5");
const button7 = document.getElementById("sq6");
const button8 = document.getElementById("sq7");
const button9 = document.getElementById("sq8");

const box = document .querySelector(".box");

let buttonlist = [
    button1, button2, button3, button4, button5, button6, button7, button8, button9
];