var readlineSync= require("readline-sync");
var chalk= require("chalk");

var userName= readlineSync.question(chalk.yellowBright.bgCyan("Please enter your name:" ));
console.log("");
console.log(chalk.italic.underline.red("Welcome to MARVEL QUIZ " +userName));

console.log("");
console.log("---------------");
var score=0;

var questionOne= {
  question: "Who is the first Avenger? ",
  optionOne:"1.Iron Man",
  optionTwo:"2.Captain Marvel",
  optionThree:"3.Hulk",
  optionFour:"4.Captain America",
  answer:"4"
}
var questionTwo= {
  question: "Who is the GOD OF THUDER? ",
  optionOne:"1.Hela",
  optionTwo:"2.Loki",
  optionThree:"3.Thor",
  optionFour:"4.Captain America",
  answer:"3"
}
var questionThree= {
  question: "How many Infinity Stones are there? ",
  optionOne:"1.Four",
  optionTwo:"2.Five",
  optionThree:"3.Six",
  optionFour:"4.Seven",
  answer:"3"
}
var questionFour= {
  question: "Who defeated Thanos? ",
  optionOne:"1.Iron Man",
  optionTwo:"2.Spider Man",
  optionThree:"3.Captain Marvel",
  optionFour:"4.Captain America",
  answer:"1"
}
var questionFive= {
  question: "How many possibile futures did Doctor Strange saw? ",
  optionOne:"1.15,001,605",
  optionTwo:"2.10,000,000",
  optionThree:"3.14,000,605",
  optionFour:"4.None",
  answer:"3"
}

var questionList=[questionOne,questionTwo,questionThree,questionFour,questionFive];


for(var i=0; i<questionList.length;i++){
  console.log(chalk.bold.magenta(questionList[i].question));
  console.log(chalk.cyan(questionList[i].optionOne));
  console.log(chalk.cyan(questionList[i].optionTwo));
  console.log(chalk.cyan(questionList[i].optionThree));
  console.log(chalk.cyan(questionList[i].optionFour));
  playQuiz(questionList[i].question,questionList[i].answer);
}

function playQuiz(question,answer){
  userAnswer= readlineSync.question("");
  console.log(chalk.white.bgCyan("Your answer is " +userAnswer));
  if(userAnswer===answer)
  {
    console.log(chalk.green("Correct Answer"));
    score++;
    console.log(chalk.yellowBright("1 Point " ));
  }
  else
  {
    console.log(chalk.red("Uh oh!! Wrong Answer"));
    console.log(chalk.yellowBright("0 Point"))
  }
  console.log("---------------");
}

console.log(chalk.white.bgGray("Final score: " + chalk.black.bgYellow("0"+score)));