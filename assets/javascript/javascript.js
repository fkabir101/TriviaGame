// create object to hold all questions and answers
var questionObject = {
  questionArray :[{
    questionNumber : "Question 1",
    questionDisplay : "Question",
    answer: ["Answer1", "Answer2", "Answer3", "Answer4"],
    correctIndex: 0,
  },
  {
    questionNumber : "Question 2",
    questionDisplay : "Question",
    answer: ["Answer1", "Answer2", "Answer3", "Answer4"],
    correctIndex: 1,
  }]
};

var currentQuestion = 0;
var correctAnswers = [];

start();
function start(){
  $("#question-number").text(questionObject.questionArray[0].questionNumber);
  $("#question-display").text(questionObject.questionArray[0].questionDisplay);
}