#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let pincode = 2244;
const pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin code",
        type: "number",
    },
]);
if (pinAnswer.pin === pincode) {
    console.log("correct pin code");
}
else {
    console.log("incorrect pin code !!");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "check balance", "fast cash"],
    },
]);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter the amount",
            type: "number",
        },
    ]);
    if (amountAns.amount > myBalance) {
        console.log("your balance is insufficient");
    }
    else if (amountAns.amount < myBalance) {
        let remaining = myBalance - amountAns.amount;
        console.log(`${"your remaining balance is "} ${remaining}`);
    }
}
else if (operationAns.operation === "check balance") {
    console.log(`${"your balance is"} ${myBalance}`);
}
else if (operationAns.operation === "fast cash") {
    let amountCash = await inquirer.prompt([
        {
            name: "atmCash",
            message: "select an amount",
            type: "list",
            choices: ["5000", "2000", "1000"],
        },
    ]);
    console.log(`your amount ${amountCash.atmCash} has been successfully withdrawn.`);
}
