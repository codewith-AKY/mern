//create a function with parameters username and password.display the results for both successful and fail operation.

let username=prompt("Enter username");
let password=prompt("Enter password");
function loginUser(username,password){
    const user="admin";
    const pass="123";


    if(username===user &&password===pass){
        alert("login sucessful!!");
    }
    else{
        alert("Invalid creditnals");
    }
}
loginUser( username ,password);