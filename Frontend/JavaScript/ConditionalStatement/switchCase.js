//switch case is used when you want to check one value agianst multiple possible values.
// switch (value) {
//     case value1:
//         // code
//         break;

//     case value2:
//         // code
//         break;

//     case value3:
//         // code
//         break;

//     default:
//         // code if nothing matches
// }

let day= Number(prompt("Enter number of days 1-7:"));
switch(days){
    case 1:
        alert("Today is Sunday");
        break;

        case 2:
        alert("Today is Monday");
        break;

        case 3:
        alert("Today is Tuesday");
        break;

        case 4:
        alert("Today is Wednesday");
        break;

        case 5:
        alert("Today is thursday");
        break;

        case 6:
        alert("Today is  Friday");
        break;

        case 7:
        alert("Today is Saturday");
        break;


        default:
            alert("Invalid day");


}