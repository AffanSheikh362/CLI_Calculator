#! /usr/bin/env node
console.log("By Sir Affan");
import inquirer from "inquirer";
const Num = await inquirer.prompt([
    { message: "Enter 1st Number :", type: "number", name: "first" },
    { message: "Enter 2nd Number :", type: "number", name: "Second" },
    {
        message: "Enter the operation :",
        type: "list",
        name: "Operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Divison"],
    },
]);
if (Num.Operation === "Addition") {
    console.log(`The answer of sum is : ${Num.first + Num.Second}`);
}
else if (Num.Operation === "Subtraction") {
    console.log(`The answer of subtraction is : ${Num.first - Num.Second}`);
}
else if (Num.Operation === "Multiplication") {
    console.log(`The answer of product is : ${Num.first * Num.Second}`);
}
else {
    console.log(`The answer of Divison is : ${Num.first / Num.Second}`);
}
