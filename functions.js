// document.write("Learning Functions Today")

// a=parseInt(prompt("one side is: "));
// b=parseInt(prompt("one side is: "));

// function recArea(a, b){
//     let h=a;
//     let w=b;
//     document.write(h*w);
// }
// recArea(a,b);


// ananymous Function
// const login = function(username , passward){
//     document.write(username);
// }
// login("Dhiraj  ");

// const area = (a, b) => a*b;
// a=parseInt(prompt("one side is: "));
// b=parseInt(prompt("one side is: "));
// document.write(area(a,b));


// const n =parseInt(prompt("table of : "));
// const generateTable = () => {for(let i=1; i<=10; i++){
    
//     document.write(`${i*n}  --`);
// }}
// generateTable();
const r = parseInt(prompt("radius of circle is: "));
calAreaOfCircle = (r) => {
    const pi = 3.14;
    return  pi * r *r;
   
}
document.write(calAreaOfCircle (r));

calSquare = (newVar, r) => {
    const calAreaOfCircle = newVar(r);
    return calAreaOfCircle*calAreaOfCircle;
}

document.write(calSquare (r));
