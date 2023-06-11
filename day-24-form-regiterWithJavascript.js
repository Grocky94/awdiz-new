function register(event) {
    event.preventDefault();
    var name = document.getElementById("userName").value;
    console.log(name, "-name");
    var number = document.getElementById("userNumber").value;
    console.log(number, "-number");
    var email = document.getElementById("userEmail").value;
    console.log(email, "-email");
    var password = document.getElementById("userPassword").value;
    console.log(password, "-password");

    document.getElementById("userName").value = "" //assignin
    document.getElementById("userNumber").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("userPassword").value = "";

    alert('register');
    var details = {
        addedName: name,
        addedNumber: number,
        addedEmail: email,
        addedPassword: password
    }

    localStorage.setItem("studentList", JSON.stringify(details));

}
var dataFromLS = JSON.parse(localStorage.getItem("studentList", "details"));
console.log(dataFromLS);


// var dataFromLS = JSON.parse(localStorage.getItem("StudentsList"));
// localStorage.setItem("stundets", "[ 1,2,4,5]");
// localStorage.removeItem("stundets")



// Native JavaScript



// var studentsList = [ { name: "Swaraj" , email : "abc@.gsam.com" },
//                     { name: 'AVinahs', email : "abc@.gsam.com" },
//                     { name: " PrATIK", email : "abc@.gsam.com" } ]




// var array = [2, 4354, 65, 56, 7, "3245", "IJHUGY"];


// var myData = {
//     myAge: 50,
//     mySurName: "Jadhav",
//     xyz: true,
//     myHYIK: [1, 23, "ada", awd, awd],
//     myHello: { hello1: [2, 3, 454, 7] }
// }
// console.log(myData.myAge)50
// console.log(myData.mySurName)Jadhav
// console.log(myData.xyz) true



// JS
// JSON -


// { name: 'Swaraj' }

// { "name": "Swaraj" }

// JSON.stringify(DATA) => JS TO JSON
// JSON.parse(DATA) => JSON TO JS


