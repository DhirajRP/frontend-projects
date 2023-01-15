console.log("Alert | Prompt | Confirm");
// Alert in in-browser Javascript
// alert("This is a message")
// //Alert does not return anything
// let name = prompt("What is your name", "Guest")
// console.log(name)


//confirm

let age = prompt("Age please");

if(age>= 18 && age <= 100){
    console.log("please Enter");

}
else if (age< 18 ) {
    console.log("you are a Kid")
}
else{
    console.log("Invalid")
}
