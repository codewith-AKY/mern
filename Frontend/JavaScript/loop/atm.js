let correctPin = 1234;
let pin;
let attempts = 0;

do {
    pin = Number(prompt("Enter your PIN:"));
    attempts++;

    if (pin === correctPin) {
        alert("You are authorized");
        break;
    } else {
        console.log("Wrong PIN.");
    }

        if (attempts ===3) {
            console.log("Your card is blocked!");
        } else {
            console.log("Attempts remaining: " + (3 - attempts));
        }
    }

 while (pin !== correctPin && attempts < 3);