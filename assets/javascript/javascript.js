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
  console.log(totalCorrect);
}

function loading() {
  $("#question-container").hide();
  $("#loading-image").show();
  if (gameRun == true) {
    if (currentQuestion != questionObject.questionArray.length) {
      setTimeout(function () {
        getQuestion(currentQuestion);
      }, 1000)
    } else {
      setTimeout(function () {
        finishTrivia();
      }, 1000)
    }
  }
  else{
    setTimeout(function () {
      start();
      gameRun = true;
    }, 1000)
  }
}
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