//create a function to check balance, withdraw cash and deposit cash in atm system.
let balance = 10000;

function checkBalance() {
    console.log("Current Balance: Rs. " + balance);
}

function withdrawCash(amount) {
    if (amount <= balance) {
        balance = balance - amount;
        console.log("Withdrawal successful");
        console.log("Remaining Balance: Rs. " + balance);
    } else {
        console.log("Insufficient balance");
    }
}

function depositCash(amount) {
    balance = balance + amount;
    console.log("Deposit successful");
    console.log("Current Balance: Rs. " + balance);
}

checkBalance();

withdrawCash(2000);

depositCash(5000);

checkBalance();