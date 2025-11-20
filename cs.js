function computergrade(grade) {
    if (grade >= 94.5) {
        console.log("1");
    } else if (grade >= 91.5) {
        console.log("1.25");
    } else if (grade >= 88.5) {
        console.log("1.5");
    } else if (grade >= 85.5) {
        console.log("1.75");
    } else if (grade >= 82.5) {
        console.log("2");
    } else {
        console.log("You are not adult");
    }
}    

computergrade(85);

function login(username, password) {
    if (username === "Earl") {
        if (password === "1234") {
        console.log("Welcome User"); 
        } else {
        console.log("Invalid Login Credentials");
        }
    } else {
        console.log("Access Denied");
    }
}    

login("Earl", "1234");