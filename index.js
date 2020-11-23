var readlineSync=require("readline-sync");
var chalk = require('chalk');
//console.log(chalk.red('Hello world!'));
var score=0;

console.log(chalk.bgYellow(" IPL QUIZ \n\n"));

var user=readlineSync.question("Please Enter Your Name?: ");
console.log(chalk.red("WELCOME! "+user));

console.log(chalk.cyan("\nRULE: every CORRECT answer rewards 2 points & WRONG answer deduct 1 point"));
console.log(chalk.bgMagenta("\nLets See how much you know about ipl \nLets GOOOO!!!!\n\n"));

function play(question,answer)
{
var userAnswer=readlineSync.question(question);
if(userAnswer===answer)
{
  score=score+2;
 console.log(chalk.green("CORRECT Answer :) ") +score);
}
else
{
  score=score-1;
  console.log(chalk.red("WRONG Answer !!!") +score);
}


}
var questions=[
  {
    question:"1.which is the most succesful ipl team? \na)CSK\tb)MI\nc)KKR\td)SRH\nAns: ",
    answer:"b"
    },
  {
    question:"2.who has scored most runs in ipl(ALL TIME)? \na)Chris Gayle\tb)David Warner\nc)Suresh Raina\td)Virat Kohli\nAns: ",
    answer:"d"},
  {
    question:"3.who has taken most wickets in ipl(ALL TIME)? \na)Amit Mishra\tb)Bhuvneshwar kumar\nc)Lasith Malinga\td)Dale Steyn\nAns: ",
    answer:"c"},
  
  {
    question:"4.who has scored most sixes in ipl(ALL TIME)? \na)Chris Gayle\tb)MS Dhoni\nc)Rohit Sharma\td)AB De Villiers\nAns: ",
    answer:"a"},
  {
    question:"5.who has most Hat Tricks in ipl history? \na)Pravin Tambe\tb)Yuvraj Singh\nc)Amit Mishra\td)Samuel Badree\nAns: ",
    answer:"c"},
  {
    question:"6.who has scored most centuries in ipl(ALL TIME)? \na)Chris Gayle\tb)David Warner\nc)Brendon McCallum\td)Virat Kohli\nAns: ",
    answer:"a"},
  {
    question:"7.who has the record of longest six in history? \na)MS Dhoni\tb)Albie Morkel\nc)Adam Gilchrist\td)Yuvraj Singh\nAns: ",
    answer:"b"},
  {
    question:"8.Which player has won most ipl titles ? \naKarn Sharma\tb)MS Dhoni\nc)Rohit Sharma\td)Kierron Pollard\nAns: ",
    answer:"c"},
  {
    question:"9.which team has record of highest run chase in IPL? \na)CSK\tb)RR\nc)KKR\td)RCB\nAns: ",
    answer:"b"},
  {
    question:"10)who is the most expensive Player in history of IPL auction ? \na)Ben stokes\tb)Virat Kohli\nc)Pawan Negi\td)Yuvraj Singh\nAns: ",
    answer:"d"},

]

for(i=0;i<questions.length;i++)
{
  play(questions[i].question,questions[i].answer);
}

console.log(chalk.red("\n\n Good!! your final score is: "+ score ));

var Players=[
  {
    name:"ajinkya",
    scored:20
  },
  {
    name:user,
    scored:score
  }

];

console.log("\n-----------------------------------");
if(score===Players[0].scored)
console.log(chalk.yellow("hurray!!! you created new highscore"));
console.log("-----------------------------------\n");


console.log("HIGHSCORE\n");

function higher(name,scored)
{
  
  console.log(name + " : " + scored);
}


for(i=0;i<Players.length;i++)
{
  higher(Players[i].name,Players[i].scored);
}
