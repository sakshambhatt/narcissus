var readLineSync = require("readline-sync");
var score = 0;
var highscores = [
  {
    name: "Saksham",
    score: 5
  }
];
var quizQuestions = [
  questionOne = {
    question: "Who is my favorite superhero?",
    answer: "Batman"
  },
  questionTwo = {
    question: "Which company do I work at currently?",
    answer: "Accenture"
  },
  questionThree = {
    question: "What university did I goto for my undergrad? (acronym in uppercase)",
    answer: "MUJ"
  },
  questionFour = {
    question: "What is my favorite music genre?",
    answer: "Metal"
  },
  questionFive = {
    question: "Which social media do I use prominently?",
    answer: "Twitter"
  }
];


var userAnswer = "ABC";

function displayHighscores() {
  console.log("-----------------------");
  console.log("THE HIGHSCORE!!!")
  for(var i = 0; i < highscores.length; i++) {
    console.log(highscores[i].name + " " + highscores[i].score);
  }
}

function quizFunction(array) {
  console.log("Welcome " + userName + ", answer the questions to guage how well you know the creator of this quiz...");

  for(var i = 0; i < array.length; i++) {
    console.log("-----------------------");
    userAnswer = readLineSync.question(array[i].question + "\n");
    if(userAnswer === array[i].answer) {
      console.log("You were right!");
      score = score + 1;
    } else {
      console.log("You were wrong...")
      console.log("The correct answer was: " + array[i].answer);
    }
  }
  console.log("-----------------------");
  console.log(userName + " your score is: " + score);
  displayHighscores();
  console.log("-----------------------");
  console.log("If you think you beat or matched the highscore, please send a screenshot to the creator");
}

var userName = readLineSync.question("Please enter your name to begin: ");

quizFunction(quizQuestions);