const readline = require("readline-sync");
const fs = require("fs");
const folder = "../Lab8/";
const request = require("request");

let userInput = readline.question("Enter a string: ");

console.log("");
palindromeChecker(userInput);

listDirectory();


readInputFile("Lab8.js")

makeaRequest();

function palindromeChecker(input) {
    var string = input.split("").reverse().join("");

    if (string == input) {
        console.log(input+" is a palindrome");
    } else {
        console.log(input+" is not a palindrome");
    };

};

function listDirectory() {
    console.log("")
    console.log("-------------------------------------------------------------------");
    console.log("");
    console.log("Current Directory:");
    console.log("");

    fs.readdirSync(folder).forEach(file => {
        console.log(file);
      });
};

function readInputFile(file) {

    fs.readFile(file, "utf-8", (err,data) => {
        if (err) throw err;
        console.log("")
        console.log("-------------------------------------------------------------------");
        console.log("");
        console.log("Contents of Lab8.js:");
        console.log("");
        console.log(data);
    });
}

function makeaRequest() {
    

    request("https://www.google.com", (error, response, body) => {
        console.log("")
        console.log("-------------------------------------------------------------------");
        console.log("");
        console.log("HTTP Request for www.google.com");
        console.log("");
        console.log("error: ", error);
        console.log("statusCode: ", response && response.statusCode);
        console.log("")
        console.log("-------------------------------------------------------------------");
    });
};


