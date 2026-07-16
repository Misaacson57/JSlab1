let userRole = "admin";
let accessLevel;
let isLoggedin= true;
let userMessage;
let userType = "subscriber";
let usercategory;


if (userRole === "admin"){
    accessLevel = "Full Access";
} else if (userRole === "manager"){
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

if (isLoggedin) {
    if (userRole === "admin"){
        userMessage = "Welcome, Admin";
    } else {
        userMessage = "Welcome User"; 
    }
} else {
    userMessage = "Log in please";
}
console.log("User Messaage:", userMessage);

switch (userType){
    case "admin":
        usercategory = "Administrator";
        break;
    case "manager":
        usercategory = "Manger";
        break;
    case "subscriber":
        usercategory = "Subscriber";
        break;
    default:
        usercategory = "Unknown";
}

console.log("User Category:", usercategory);