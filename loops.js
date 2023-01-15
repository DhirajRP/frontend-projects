console.log("Loops")
// let i = 0;
// for(i = 0 ; i<3; i++)
// {
//     console.log(i)
// }

let frds = ["raj", "myur", "aniket" , "amin", "rahu"]
// for (let index = 0; index < frds.length; index++) {
//     console.log ( "hi there  " + frds[index]);

    
// }
// frds.forEach ( function f(element){
//     console.log("Hello there  " + element)
// })

// for (element of frds){
//     console.log("Hey  " + element)
// }

let employee = {
    names: "Mayur",
    company: "exim files",
    salary: 2000,
    channel: "CWH"
    }
    for (key in employee){
        console.log (`the ${key} of employee is ${employee[key]}`);
    }

    let i =0
    while (i<5){
        console.log(`${i} is less than 5`)
    }
