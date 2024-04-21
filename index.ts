#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);


const answer = await inquirer.prompt([
  { name: "userGuessedNumber", type: "number", message: "please Guess a number between 1 to 10 " },
]);
if (answer.userGuessedNumber === randomNumber) {
  console.log("congratulations! it's correct");
} else {
  console.log("SORRY! it's wrong");
}
