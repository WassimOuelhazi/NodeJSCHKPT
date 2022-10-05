//1- In this task, you will:
//Create a file named hello-world.js
//Write a program to print "HELLO WORLD" to the console


console.log('HELLO WORLD');


// 2- In this task, you will:
// create a server  
// Write a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000


const http = require('http');

const server = http.createServer(function (req,res){
res.write('<h1>Hello Node!!!!</h1>\n');
res.end();





});


// 3-  In this task, you will:
// First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
// Second, create a program that reads and console.log data from hello.txt

const fs=require("fs")
fs.writeFile("welcome.txt","Hello Node",err=> {
        err?console.log("error writeFile is",err):console.log("no error to display"); })

fs.readFile('welcome.txt',  (err, data)=> {
    err?console.log("error readFile is",err):console.log("The content of welcome.txt is : " + data.toString());
 });



//  4- In this task, you will:
//  Create a file named "password-generator"  
//  (use npm install generate-password : (https://www.npmjs.com/package/generate-password) 
//  Create a function that generates random passwords and console.log() that password.
var password = require('./password-generator');


// 5-  In this task, you will:
// create a file named email-sender  
// npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)
// Try to send your self email using this
var transporter = require('./email-sender');


server.listen(3000, err=>{err?console.log(err):console.log("server is running on http://localhost:3000/")});