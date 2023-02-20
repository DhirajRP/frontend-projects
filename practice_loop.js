
// write a program using for loop 
// print marks of students in an Object



let marks = {
    dhiraj: 65,
    karan:98,
    madhav: 56,
    joshi:57,
    radha : 45
}

for(i=0; i< Object.keys(marks).length ; i++)
{
    console.log(`Marks of ${Object.keys(marks)[i]} are ${marks[Object.keys(marks)[i]]}`);
}

for (let j in marks){
    console.log(`Marks of ${j} are ${marks[j]}`);
}


// problem no 3


const correct_num = 8888;
const per = "perfect";
const ta = "Try Again";
const total_try = 4;
let user_try = 1;



for(let i=0; i<total_try; i++){
    let user_input = parseInt(prompt("Enter Number: "));
    if(user_input == correct_num){
        alert(per);
        break;
    }
    else{
        alert(`${ta} Attempts Remaining ${total_try - user_try }`  );
    }
    user_try++;
}


const mean = (a,b,c,d)=>{
    return (a+b+c+d)/4;
}

console.log(mean(4,5,4,5));