const form = document.querySelector('#quiz-form');
const submitBtn = document.querySelector('button');
const outputEl = document.querySelector('#output');

const correctAnswers = ["90", "right angled", "one right angle", "12, 16, 20", "Equilateral triangle", "85"];

const calculateScore = () => {
  let score = 0;
  let index = 0;

  const quesAns = new FormData(form);
  for(let val of quesAns.values()){
    score = val === correctAnswers[index] ? score+1 : score;
    index++;
  }

  return score;
}

const submitHandler = () => {
  const score = calculateScore();
  outputEl.textContent = `Your quiz score is ${score}`
}

submitBtn.addEventListener('click', submitHandler);