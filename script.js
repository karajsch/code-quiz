// Integer, String ,Array, Boolean, Object

// Quiz App
// As a User I want to be able to go to an application, click on start, be prompted with trivia questions
// As a user, if I click On a correct answer, I should Increment a score by one.
let array_of_questions = [
  {
    question: "1. What are the five main data types in Javascript?",
    correctAnswer: "String, Array, Integers, Boolean, Object",
    answerChoices: [
      "String, Array, Variable, Boolean, Conditional",
      "Loop, Iterator, Console, Boolean, Object",
      "String, Array, Integers, Boolean, Object",
      "Functions, Loops, Documents, True, Event",
    ],
  },
  {
    question:
      "2. Is JavaScript a front-end, back-end, or full-stack programming language?",
    correctAnswer: "Full-stack",
    answerChoices: ["Front-end", "Back-end", "Full-stack", "None of the above"],
  },
  {
    question:
      "3. Which function would you call to write into your browser console?",
    correctAnswer: "console.log()",
    answerChoices: [
      "document.write()",
      "innerHTML",
      "Inspector",
      "console.log()",
    ],
  },
];

// Starting from first question in array_of_questions
let current_question = 0;

// Starting from score of 0
var score = 0;

// This is what starts the application
function start_application() {
  prompt();
}

function evaluate_answer(button_clicked) {
  // Take the answer that the user gave me and see if it matches the correct answer of the current question.
  alert("here");
  if (
    button_clicked.target.innerHTML ==
    array_of_questions[current_question].correctAnswer
  ) {
    alert("Correct!");
    score++;
  } else {
    alert(
      "Incorrect - 2 seconds will be subtracted and a point will deducted."
    );
    count = count - 2;
    score--;
  }

  // this lets the script advance to the next question
  current_question++;

  //
  if (current_question < array_of_questions.length) {
    prompt();
  } else {
    document.getElementById("score").innerHTML = "Your score is " + score + "!";
  }
}

function prompt() {
  alert("in prompt");
  var question = document.getElementById("title");
  var current = array_of_questions[current_question];

  // GO through a collection of questions
  question.innerHTML = current.question;

  const container = document.getElementById("questions");

  container.innerHTML = ""; // now we've removed everything from the questions section!

  // when i = 0, first question is shown

  for (var i = 0; i < current.answerChoices.length; i++) {
    let question = document.createElement("button");
    question.classList.add("btn");
    question.classList.add("btn-primary");
    question.innerHTML = current.answerChoices[i];
    question.addEventListener("click", evaluate_answer);
    document.getElementById("questions").append(question);
  }
}

document.getElementById("start").addEventListener("click", (e) => {
  console.log(e);
  start_application();
  //when the timer reaches 0, an alert is shown
  var interval = setInterval(function () {
    document.getElementById("count").innerHTML = count;
    count--;
    if (count === 0) {
      clearInterval(interval);
      document.getElementById("count").innerHTML = "Time's Up!";
    }
  }, 1000);
});

// timer
document.getElementById("count").innerHTML = count;

// timer starts counting down at 20 seconds
var count = 30;
