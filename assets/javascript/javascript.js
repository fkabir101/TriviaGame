// create object to hold all questions and answers
var questionObject = {
  questionArray: [{
      questionNumber: "Question 1",
      questionDisplay: "What is the alias of the protagonist of Steins;Gate",
      answer: ["Hououin Kyouma", "Okabe Rintaro", "John Titer", "Makise Kurisu"],
      correctIndex: 0,
    },
    {
      questionNumber: "Question 2",
      questionDisplay: "The quote 'I am thou, Thou art I, From the sea of thy soul, I come Call upon my name, and release thy rage! Show the strength of thy will to ascertain all on thine own, though thou be chained to Hell itself! I am the pillager of twilight, Arsene` is from what game",
      answer: ["Persona 3", "Persona 5", "God of War", "Shin Megami Tensei Devil Survivor"],
      correctIndex: 1,
    },
    {
      questionNumber: "Question 3",
      questionDisplay: "Izuku Midoriya's quirk from My Hero Academia is called what?",
      answer: ["Dark Shadow", "All for One", "One for All", "Devil Breaker"],
      correctIndex: 2,
    }
  ]
};

// Create variables for the game
var currentQuestion = 0;
var correctAnswers = [];
var totalCorrect = 0;
var gameRun = false;

// Hide game elements until start
$("#loading-image").hide();
$("#question-container").hide();

// Call function to create buttons
createAnswerButtons();

// Create start function to reset everything
function start() {
  currentQuestion = 0;
  correctAnswers = [];
  totalCorrect = 0;
  getQuestion(currentQuestion);
  $("#end").html("");
}

// Function to create buttons
function createAnswerButtons() {
  for (var i = 0; i < questionObject.questionArray[0].answer.length; i++) {
    var answerButton = $("<button>");
    var row = $("<div>");

    row.addClass("row justify-content-center");

    answerButton.attr("answer-index", i);
    answerButton.addClass("answer");

    row.append(answerButton);
    $("#answers").append(row);
  }
}

// Function to get current question
function getQuestion(index) {
  $("#loading-image").hide();
  $("#question-container").show();
  var i = 0;
  $("#question-number").text(questionObject.questionArray[index].questionNumber);
  $("#question-display").text(questionObject.questionArray[index].questionDisplay);

  $(".answer").each(function () {
    if ($(this).attr("answer-index") == i) {
      $(this).text(questionObject.questionArray[index].answer[i]);
      i++;
    }
  });
}

// Tally and display the total answers
function finishTrivia() {
  console.log(correctAnswers);
  for (var i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] == true)
      totalCorrect++;
  }
}

function loading() {
  $("#question-container").hide();
  $("#loading-image").html("<img src='assets/images/loading.gif' width='300px'></img>");
  $("#loading-image").show();
  if (gameRun == true) {
    if (currentQuestion != questionObject.questionArray.length) {
      setTimeout(function () {
        getQuestion(currentQuestion);
      }, 2000)
    } else {
      setTimeout(function () {
        endGame();
      }, 2000)
    }
  }
  else{
      start();
      gameRun = true;
  }
}
function endGame(){
  gameRun = false;
  $("#start").show();
  // run to add up total correct answers
  finishTrivia();
  //hide elements
  $("#question-container").hide();
  $("#loading-image").hide();

  var correctPercentage = Math.floor((totalCorrect/questionObject.questionArray.length)*100);
  var endScreen = $("<div>");
  var progressBar = $("<div>");
  var display = $("<h3>");

  display.text(`Correct Answers: ${totalCorrect} out of ${questionObject.questionArray.length}`);

  // create progress bar
  progressBar.html("<div class='progress-bar' role='progressbar' style='width:" + correctPercentage+ "%;' aria-valuemin='0' aria-valuemax='100'>" +correctPercentage+ "%</div> ");
  endScreen.append(display);
  endScreen.append(progressBar);
  $("#end").append(endScreen);
}

// On click functions
$(".answer").on("click", function () {
  if ($(this).attr("answer-index") == questionObject.questionArray[currentQuestion].correctIndex) {
    correctAnswers.push(true);
  } else {
    correctAnswers.push(false);
  }
  currentQuestion++;
  loading();
})
$("#start").on("click", function () {
  $("#start").hide();
  loading();
})

