const form = <HTMLFormElement>document.querySelector('#quiz-form');
const submitBtn = <HTMLButtonElement>document.querySelector('button');

const correctAnswers : string[] = ["90", "right angled", "one right angle", "12, 16, 20", "Equilateral triangle", "85"];

const calculateScore = (): Number => {
  const quesAns = new FormData(form);
  console.log(quesAns);
}

submitBtn.addEventListener('click', calculateScore);