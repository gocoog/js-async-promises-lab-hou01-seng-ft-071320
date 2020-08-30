const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

let appendQuestion = (question) => {
  let container = document.querySelector('.question-container')
  container.innerHTML = question.questionText
}

let askQuestionThen = (time) => {
  question = questions[0];
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve()
    }, time)
  })
}

let removeQuestion = () => {
  return new Promise((resolve, reject) => {
    let container = document.querySelector('.question-container')
    container.innerHTML = ''
  })
}

let askQuestionThenRemoveQuestion = (time) => {
  return askQuestionThen(time)
  .then(removeQuestion)
}

let trueAndFalseButtons = () => {
  return document.querySelector('.true-false-list').querySelectorAll('.btn')
}

let toggleTrueAndFalseButtons = () => {
  document.querySelector('div.btn.red').classList.toggle("hide")
  document.querySelector('div.btn.green').classList.toggle("hide")
}

let displayQuestionOnClick = () => {
  let btn = document.querySelector('.waves-effect')
  btn.addEventListener('click', appendQuestion(question));
  toggleTrueAndFalseButtons();
}