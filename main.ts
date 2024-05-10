#! usr/bin/env node

//making ATM for balance checking, withdrawal, and fast cash

import inquirer from "inquirer"

let pin:number = 7373;
let balance:number = 500;

//asking pin code from the customer
let askPin = await inquirer.prompt({
    name: "pinCode",
    type: "number",
    message: "Please enter your 4 digit Pin Code"
})

//condition statement
//checking the pinCode
if(pin === askPin.pinCode) {
    //if entered pin code is correct, then the system will proceed
    console.log("Entered Pin code is correct, let's proceed");
    
    //now it'll ask to check balance or withdraw the amount
    let askOperation = await inquirer.prompt({
        name: "operation",
        type: "list",
        choices: ["Check Balance", "Withdraw Amount", "Fast Cash"]
    });
                //if customer select to withdraw balance
                if(askOperation.operation === "Withdraw Amount") {
                     let withdrawAmount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: "Please enter amount to withdraw"
                     })
                            if(withdrawAmount.amount > balance) {
                                console.log("Insufficient balance")
                            }
                            else if(withdrawAmount.amount <= balance) {
                                let remainingAmount = balance -= withdrawAmount.amount;
                                console.log(`Your remaining balance is ${remainingAmount}`)
                            }
                }
                else if(askOperation.operation === "Fast Cash") {
                    let ask4amount = await inquirer.prompt({
                        name: "fCash",
                        type: "list",
                        choices: ["100", "200", "500"],
                        message: "Please select amount to withdraw"
                    })
                            if(ask4amount.fCash === "100"){
                                if(ask4amount.fCash > balance) {
                                    console.log("Insufficient balance")
                                }
                                else if(ask4amount.fCash <= balance) {
                                    let remainingAmount = balance -= ask4amount.fCash;
                                    console.log(`Your remaining balance is ${remainingAmount}`)
                                }
                            }
                            else if(ask4amount.fCash === "200")
                                {
                                if(ask4amount.fCash > balance) {
                                    console.log("Insufficient balance")
                                }
                                else if(ask4amount.fCash <= balance) {
                                    let remainingAmount = balance -= ask4amount.fCash;
                                    console.log(`Your remaining balance is ${remainingAmount}`)
                                }
                                }
                            else if(ask4amount.fCash === "500")
                                {
                                if(ask4amount.fCash > balance) {
                                        console.log("Insufficient balance")
                                    }
                                    else if(ask4amount.fCash <= balance) {
                                        let remainingAmount = balance -= ask4amount.fCash;
                                        console.log(`Your remaining balance is ${remainingAmount}`)
                                    }
                                }
                }
                else{console.log(`Your balance is ${balance}`)}
}
//if pin code is correct
else {console.log("Sorry, entered pin code is incorrect")}