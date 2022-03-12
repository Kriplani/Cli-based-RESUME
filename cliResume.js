const inquirer = require("inquirer");

const cp = require('child_process')


function displayList(){
       inquirer
       .prompt([
         {
           type: "list",
           name: "selection",
           choices: ["About", "Skills", "Academics", "Projects"],
         },
       ])
       .then(function (answer) {
         if (answer.selection == "About") {
           console.log(`
           hii There,
           I am Kriplani
          
           A passionately curious Web developer 
           who just found out that making websites and seeing 
           the magic happen on the Internet is what excites me the most.`);
           displayNext()
         } else if (answer.selection == "Skills") {
           console.log("JavaScript , Java , c++ , html , css  ");
           displayNext()
         } else if (answer.selection == "Academics") {
           cp.execSync('start chrome https://drive.google.com/file/d/197ptso7T9ACSQ3f8QjBeXOyEI8K8JYBz/view?usp=sharing')
           displayNext()
         } else if (answer.selection == "Projects") {
           cp.execSync('start chrome https://github.com/Kriplani ')
           displayNext()
         }
       });
}


displayList()


function displayNext(){
       inquirer
       .prompt([
         {
           type: "list",
           name: "selection",
           choices: ["Go Back" , 'Exit'],
         },
       ])
       .then(function (answer) {
         if (answer.selection == "Go Back") {
            displayList()
         } else if (answer.selection == "Exit") {
             console.log('Resume Closed')
         } 
       });
}

