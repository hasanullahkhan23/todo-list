#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condision = true;
while (condision) {
    let todoQuestion = await inquirer.prompt([
        {
            name: "firstQuestion",
            message: "Do you want to add in your Todos?",
            type: "input"
        },
        {
            name: "secondQuestion",
            message: "Do you want add more in your Todos?",
            type: "confirm",
            default: "true"
        }
    ]);
    todos.push(todoQuestion.firstQuestion);
    condision = todoQuestion.secondQuestion;
    console.log(todos);
}
