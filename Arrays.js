document.getElementById('hi').innerHTML = 'Basics Of Arrays';
// const evenNoss = new Array ();

const evenNos = [2 ,4,6,8,10];
// document.write(evenNos[5])

const evenobj = {
    0:2,
    1:4,
    2:6,
    3:8,
    4:10
}

// const two = evenobj[0];
// const Two = evenNos [ 0];

// // CRUD Operations
// // Create | Read | Update | Delete


// // 1.  Create 
// const days = [ ];

// // Push Method : Add elements from End

// days.push('sunday')
// document.write('day:  ', days)
// console.log ({days})

// // Unshift : Add elements from front

// days.unshift('monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')

// days.push('No working day')

// days.unshift('Working days')

// 2. Read

// const days = ['monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// document.write(days[5])

// 3. Update

// const days = ['monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// days[6] = 'No Working Day'

// document.write(days[6])

//  4. Delete

const days = ['monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// //  pop ---> Removes last element

days.pop()
// console.log ({days});

// shift -- > Removes element from front

days.shift();
console.log({days});

Splice --> REmoves desired element

var ndays = days.splice(1, 3);
console.log({days, ndays })

Filter --> We can remove element using conditions

const filterDay = days.filter((value, index, array) => {
    return value.length > 7;
})

console.log({days, filterDay});


/////// loops

for(let i = 0; i < days.length; i++){

    console.log(days.length);
    console.log(`Today is ${days[i]} `);
}

For Each loop

days.forEach((day, index)=>{
    console.log(days.length);
console.log(`Today is ${day} ${index}`);

})



/* ARRAY METHODS */

// Find

const ar1 = [ 8, 5, 9, 8, 556, 84, 8 ];

// const found = ar1.find((value, i, obj)=> {
// // console.log({value ,i, obj});
// return value > 8;
// });
// console.log(found)

// INdex Of

// console.log (indx = ar1.indexOf(8, 4));

// console.log (indx = ar1.findIndex((value)=>{
//     if (value % 2 ===0){
//         return value;
//     }
// }));

const ar2 = [5, 6, 7, 7,7];

// console.log(conc = ar1.concat(ar2) );

// at


// Every

