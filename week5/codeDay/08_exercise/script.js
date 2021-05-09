// create questions

//show random question when page loads

//clicking the answer, show right or wrong

function Question(q, a1, a2, a3, a4, ra, showed) {
  this.q = q;
  this.a1 = a1;
  this.a2 = a2;
  this.a3 = a3;
  this.a4 = a4;
  this.ra = ra;
  this.showed = showed;
}

let q1 = new Question(
  "Refined Concrete Cheese",
  "a1",
  "a2",
  "a3",
  "a4",
  "ra",
  "showed"
);
let q2 = new Question(
  "Ducimus illo ullam.",
  "a1",
  "a2",
  "a3",
  "a4",
  "ra",
  "not"
);
let q3 = new Question("At est delectus.", "a1", "a2", "a3", "a4", "ra", "not");
let q4 = new Question(
  "Numquam voluptas quis vel.",
  "a1",
  "a2",
  "a3",
  "a4",
  "ra"
);
let q5 = new Question(
  "Est udiandae omnis saepe.",
  "a1",
  "a2",
  "a3",
  "a4",
  "ra"
);

var questions = [];
questions.push(q1);
questions.push(q2);
questions.push(q3);
questions.push(q4);
questions.push(q5);

document.addEventListener("load", (event) => {
  event.preventDefault();
  if (event.target.id === "body") {
    showQuestion();
  }
});

document.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.id === "btn-next") {
    showQuestion();
  } else if (event.target.id === "btn-submit") {
    showResult();
  }
});

let showQuestion = () => {
  let randQuestion = questions[Math.floor(Math.random() * 5)];
  let questionHtml = document.querySelector("#question");
  questionHtml.innerHTML = randQuestion.q;

  let answer1 = document.querySelector("#answer1");
  answer1.innerHTML = randQuestion.a1;
  let a2 = document.querySelector("#answer2");
  a2.innerHTML = randQuestion.a2;
  let a3 = document.querySelector("#answer3");
  a3.innerHTML = randQuestion.a3;
  let a4 = document.querySelector("#answer4");
  a4.innerHTML = randQuestion.a4;
};

let showResult = () => {};

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 5,
    display = document.querySelector("#timer");
  startTimer(fiveMinutes, display);
};
