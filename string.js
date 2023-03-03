document.write("Topic Strings");

const nam = 'Dhiraj';
const dob = 06/06/95;
const prof= 'Architect';
const classOf = 20118;

const message = "i am ma. Dhiraj patil \t \t \t an Architect";

document.write(message);

template literals = ` ${message}`

ASCII Table

const nam = 'Dhiraj and Rahul';

document.write(nam.replaceAll('a', 'o'));

document.write(nam.split(' ')[2]);

document.write(nam.concat(' Yo Bro'));

document.write(nam.substring(3, 8));

document.write(nam.startsWith('do'));

document.write(nam.endsWith('l'));

document.write(nam.includes('or'));

document.write(nam.indexOf('o'));

document.write(nam.lastIndexOf('a'));

let a = prompt('Say Anything in capital : ');
document.write(a.substring(3,10));