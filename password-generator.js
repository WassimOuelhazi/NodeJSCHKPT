//  4- In this task, you will:
//  Create a file named "password-generator"  
//  (use npm install generate-password : (https://www.npmjs.com/package/generate-password) 
//  Create a function that generates random passwords and console.log() that password.


var generator = require('generate-password');

var password = generator.generate();

console.log("the generated password is the following:",password);


module.exports=password;
