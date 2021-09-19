// getting functionalities from another module

const helper = require('./helper');
// another way of doing it
const {getPassword} = require('./passwords');


console.log('This is our main file');
helper.getSomeData('https://wikipedia.org');
console.log(`your password = ${getPassword()}`);
