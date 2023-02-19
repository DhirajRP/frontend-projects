// Loops

// For Loop

// for(i=0; i<=100; i++)
// {
//     console.log(i);
// };

// While Loop

// let i=1;
// while(i<=3)
// {
//    console.log(i);
//    i++; 
// }

// DO WHILE LOOP

// let i = 110;

// do{
//     console.log(i);
//     i++;
// }
// while(i<=10);

// for(i=1; i<=100; i++){
//     console.log(i)

// if(i=20){
//     break;
// }
// }

// Questions
// 1. print even nos upto 60 using loops

// for(i=1; i<=60; i++)
// {
//     if(i%2==0){
//         console.log("Even no : ", i);
//     }
    
// }

// let i = 2;
// while(i<=60){
//     console.log(i);
//     i+=2;
// }

// let i = 2
// do{console.log(i)
// i+=2}
// while(i<=60)

// Questions
// 2. calculate factorial of the no.

// const inputNo = 4;
// let result = 1;
// for(i=1 ; i<=inputNo; i++){
// result = result * i;
// }console.log(result)

// Questions
// 3. write table of 19 using loop

let table = parseInt(prompt("Enter Table no: "));

console.log(typeof table);

for(i=1; i<=10; i++){
    console.log(table*i);
}


// Questions
// 4. write a program allow someone to guess a 4 digit pin exactly 4 times

// if user guesses no. correctly print "Correct"

// otherwise print "Sorry"

// program stops after the fourth attempt