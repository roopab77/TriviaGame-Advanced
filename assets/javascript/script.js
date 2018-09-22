$(document).ready(function(){

//initialse all the variables
var questionNumber;
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var startButton = document.getElementById("start");
var timeLeft = 5;
var myQuestions = [
  {
    question: "How old is the game pacman?",
    answers: {
      a: "10 years",
      b: "20 years",
      c: "35 years",
      d: "45 years"
    },
    correctAnswer: "c",
  },
  {
    question: "Which is not a minecraft character?",
    answers: {
      a: "Steve",
      b: "Ender Dragon",
      c: "Dragon Beast",
      d: "Beast Boy"
    },
    correctAnswer: "c"
  },
  {
    question: "Who is Marios main enemy?",
    answers: {
      a: "Toadette",
      b: "Bowser",
      c: "Birdo",
      d: "Waluigi"
    },
    correctAnswer: "b"
  },
  {
    question:"Best selling video game franchise?",
    answers: {
      a:"Grand Theft Auto",
      b:"Mario",
      c:"Call of Duty",
      d:"Pokemon"
    },
    correctAnswer :"b"
  },
  {
    question:" What cartoon is about video games?",
    answers: {
      a:"Wreck It Ralph",
      b:"Turbo",
      c:"Epic",
      d:"The croods"
    },
    correctAnswer :"a"
  },
  {
    question:"In which year did Nintendo introduce its Home Video game system?",
    answers: {
      a:"1985",
      b:"1987",
      c:"1989",
      d:"1991"
    },
    correctAnswer :"a"
  },
  {
    question:"What does Pokémon stand for?",
    answers: {
      a:"Pokey monsoon",
      b:"Portable collectible monsters",
      c:"Poker monkeys",
      d:"Pocket monsters"
    },
    correctAnswer :"d"
  },
  {
    question:"Who helped created Mario, Zelda, and Star Fox?",
    answers: {
      a:"Gabe Newell",
      b:"Sigeru Miyamoto",
      c:"Nobuo Uematsu",
      d:"Satoru Iwata"
    },
    correctAnswer :"b"
  },
  {
    question:" What was Mario’s name in Donkey Kong?",
    answers:{
      a: "Jumpman",
      b : "Mr. Plumber",
      c: "Antonio",
      d : "Junpei"
    },
    correctAnswer : "a"
  },
  {
    question: "Which of these characters never speaks?",
    answers:{
      a: "Nathan Drake",
      b: "Mario",
      c: "Link",
      d: "Master Chief"
    },
    correctAnswer : "c"
  }
];

//Function to fetch data based on the index
function fetchTriviaQuestion()
{
  timeLeft = 11;
  $(".Instructions").empty();  
  questionNumber = 0;
  LoadHTML(); 
}


//Load HTML for question
function LoadHTML()
{
  
  var currentQuestion = myQuestions[questionNumber];
  var answers = [];
  var output = [];
  console.log(questionNumber);
  console.log (currentQuestion);
  // and for each available answer..
  for (letter in currentQuestion.answers) {
    // ...add a HTML radio button
    answers.push(`<label>
          <input type="radio" class= "option-input radio" name="question${questionNumber}" value="${letter}">      
          ${currentQuestion.answers[letter]}
        </label>`
      );     
}
output.push("<div class='question'>" +  currentQuestion.question + "</div>" +
    " <div class='answers'>" +  answers.join("") + "</div>");
    console.log(output);
    quizContainer.innerHTML = "<h4>Time Left : " + "<span id = 'timer'></span></h4>" + output.join("");

}


//On First time page load when start is clicked
 
startButton.addEventListener("click",fetchTriviaQuestion);


//For all the elements in the array 


});



