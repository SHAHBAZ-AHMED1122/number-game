#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    { name: "userGuessedNumber", type: "number", message: "Guess a number " },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("correct");
}
else {
    console.log("wrong");
}
