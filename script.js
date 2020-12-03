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

//console.log(array_of_questions[1].question);
//console.log(array_of_questions[2].incorrectAnswers[0]);

let current_question = 0;

function start_application() {
  prompt();
}

function evaluate_answer(button_clicked) {
  // Take the answer that the user gave me and see if it matches the correct answer of the current question.
  if (
    button_clicked.target.innerHTML ==
    array_of_questions[current_question].correctAnswer
  ) {
    alert("Correct!");
  } else {
    alert("Incorrect");
  }
}

function prompt() {
  var question = document.getElementById("title");
  var current = array_of_questions[current_question];

  // GO through a collection of questions
  question.innerHTML = current.question;

  // when i = 0, first question is shown
  for (var i = 0; i < current.answerChoices.length; i++) {
    let question = document.createElement("button");
    question.classList.add("btn");
    question.classList.add("btn-dark");
    question.innerHTML = current.answerChoices[i];
    question.addEventListener("click", evaluate_answer);
    document.getElementById("questions").append(question);
  }
}

function modify_score() {
  return true;
}

document.getElementById("start").addEventListener("click", (e) => {
  console.log(e);
  start_application();
});
