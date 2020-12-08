const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");



function generateHTML(answers) {
    return`
    <!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body>
       <h1>${answers.name}</h1>
       <h2>Location: ${answers.location}</h2>
       <p>About me: ${answer.bio}</p>
       <ul>Contact me-
       <li>LinkedIn: ${answers.linkedIn}</li>
       <li>HitHub: ${answers.github}</li>
       <ul>
        
     
    </body>
</html>
`
}

inquirer
  .prompt({
    message: "Enter your name",
    name: "myName",
  },
{
    message: "Enter your location",
    name: "location",
  },


  {
  
  }]).then(function (answers) {
    generateHTML();
    console.log(answers.myName);
    console.log(answers.location);
    })

  

