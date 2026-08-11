// if username is correct
//     ↓
//     if password is correct
//         ↓
//         Login successful
//     else
//         Incorrect password
// else
//     Incorrect username



let username=prompt("Enter username:");
let password=prompt("Enter password");

if(username==="admin"){
    if(password==="1234"){
     alert("Login Successful");
    
    }
    else{
        alert("incorrect password");
        
    }
    
}
else{
    alert("Incorrect username");
    
    
}