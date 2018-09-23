$(document).ready(function(){

  // Array of questions
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
  
  var inFlag = false;
  var currentQuestion; 
  var correctAnswer; 
  var incorrectAnswer; 
  var unanswered; 
  var seconds; 
  var time; 
  var answered; 
  var userSelect;  
  var letter = ['a','b','c','d'];
  var messages = {
    correct: "Yes, that's right!",
    incorrect: "No, that's not it.",
    endTime: "Out of time!",
    finished: "Alright! Let's see how well you did."
  }
  
  //To start the game press button start
  $('#startBtn').on('click', function(){
    $(this).hide();
    StartGame();
  });
  
  // Restarting the game at the end without loading the page
  $('#startOverBtn').on('click', function(){

    $(this).hide();
    StartGame();
  });
  
  //To start the game fetch the question from question array
  function StartGame(){
    $('#results').hide();
    $('#finalMessage').empty();
    $('#correctAnswers').empty();
    $('#incorrectAnswers').empty();
    $('#unanswered').empty();
    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    FetchQuestionAnswers();
  }
  
//Fetch question answers from array and load on the page
  function FetchQuestionAnswers(){
    
    $('.Instructions').hide();
    $('#message').empty();
    $('#correctedAnswer').empty();    
    answered = true;    
    $('.question').html('<h2>' + myQuestions[currentQuestion].question + '</h2>');
    for  (var i=0;i<4;i++){
      var choices = $('<input>');
      var choicesLabel = $("<Label>");
      choices.attr("type","radio");
      choices.attr("value", letter[i]);
      choices.attr("id","RadioAnswer");
      choices.attr("Name","answersRadio");
      choices.addClass('option-input').addClass("radio");
      choicesLabel.append(choices);
      choicesLabel.append(myQuestions[currentQuestion].answers[letter[i]]);
      $('.answerList').append(choicesLabel);
    }
    countdown();
    $("input[Name ='answersRadio']").change(function() {   
     //$('body').on('click', '#RadioAnswer', function(e) {
      console.log("radio button click event");      
      userSelect = this.value;
      clearInterval(time);
      PopulateAllAnswers();
    });
  }
  
  //This is a 15 second timer to complete one question
  function countdown(){
    console.log("incountdown");
    seconds = 15;
    $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    answered = true;   
    time = setInterval(showCountdown, 1000);
  }
  
  //This is a timer to show the answer screen
  function showCountdown(){
    console.log("in showcountdown");
    seconds--;
    $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    if(seconds < 1){
      clearInterval(time);
      answered = false;      
      PopulateAllAnswers();      
          }
  }
  
  //This is to keep count of all the correct and wrong answers and displays the right answer if answer is wrong
  function PopulateAllAnswers(){
    console.log("in answerPAge");
    $('#currentQuestion').empty();
    $('.answerList').empty(); //Clears question page
    $('.question').empty();          
    
    var rightAnswerIndex = myQuestions[currentQuestion].correctAnswer;
    var rightAnswerText  = myQuestions[currentQuestion].answers[rightAnswerIndex];
    if((userSelect == rightAnswerIndex) && (answered == true)){
      correctAnswer++;
      $('#message').html(messages.correct);
    } else if((userSelect != rightAnswerIndex) && (answered == true)){
      incorrectAnswer++;
      $('#message').html(messages.incorrect);
      $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
    } else{
      unanswered++;
      $('#message').html(messages.endTime);
      $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
      answered = true;
    }
    
    if(currentQuestion == (myQuestions.length - 1)){
      setTimeout(DisplayResults, 5000)
    } else{
      setTimeout(FetchQuestionAnswers, 2000);
      currentQuestion = currentQuestion + 1;
      
    }	
    
  }
  
  //This is the final results display
  function DisplayResults(){
    console.log("inscoreboard");
    $("#results").show();
    $("#startOverBtn").show();
    $('#timeLeft').empty();
    $('#message').empty();
    $('#correctedAnswer').empty();     
    $('#finalMessage').html(messages.finished);
    $('#correctAnswers').html("Correct Answers: " + correctAnswer);
    $('#wrongAnswers').html("Incorrect Answers: " + incorrectAnswer);
    $('#unanswered').html("Unanswered: " + unanswered);
    //$('#startOverBtn').addClass('reset');
    //$('#startOverBtn').show();
    //$('#startOverBtn').html('Start Over?');
  }
  
});



