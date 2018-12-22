// create object to hold all questions and answers
var questionObject = {
  questionArray :[{
    questionNumber : "What is the alias of the protagonist of Steins;Gate",
    questionDisplay : "Question",
    answer: ["Hououin Kyouma", "Okabe Rintaro", "John Titer", "Makise Kurisu"],
    correctIndex: 0,
  },
  {
    questionNumber : "The quote 'I am thou, Thou art I, From the sea of thy soul, I come Call upon my name, and release thy rage! Show the strength of thy will to ascertain all on thine own, though thou be chained to Hell itself! I am the pillager of twilight, Arsene` is from what game",
    questionDisplay : "Question",
    answer: ["Persona 3", "Persona 5", "God of War", "Shin Megami Tensei Devil Survivor"],
    correctIndex: 1,
  },
  {
    questionNumber : "Izuku Midoriya's quirk from My Hero Academia is called what?",
    questionDisplay : "Question",
    answer: ["Dark Shadow", "All for One", "One for All", "Devil Breaker"],
    correctIndex: 2,
  }]
};

var currentQuestion = 0;
var correctAnswers = [];

start();
function start(){
  currentQuestion = 0;
  correctAnswers = [];
  display(currentQuestion);
}

function display(index){
  $("#question-number").text(questionObject.questionArray[0].questionNumber);
  $("#question-display").text(questionObject.questionArray[0].questionDisplay);

  $("button").remove();
  for(var i = 0; i < questionObject.questionArray[0].answer.length; i++){
    var answerButton = $("<button>");
    var row = $("<div>");

    row.addClass("row justify-content-center");
    
    answerButton.attr("answerIndex", i);
    answerButton.text(questionObject.questionArray[0].answer[i]);
    answerButton.addClass("answer");

    row.append(answerButton);
    $("#answers").append(row);
  }
}

function nextQuestion(index){
  var i = 0;
  $("#question-number").text(questionObject.questionArray[index].questionNumber);
  $("#question-display").text(questionObject.questionArray[index].questionDisplay);

  $(".answer").each(function() {
    if($(this).attr("answerIndex") == i){
      console.log(i);
      $(this).text(questionObject.questionArray[index].answer[i]);
      i++;
    }
  });
}
$(".answer").on("click", function() {
  currentQuestion++;
  nextQuestion(currentQuestion);
})