const angleInputElements = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("button");
const outputElement = document.querySelector("#output");

const calculateSum = () => {
  let sum = 0;
  angleInputElements.forEach((angle) => {
    sum += Number(angle.value);
  });
  return sum;
};

const calculateIsTriangle = () => {
  return calculateSum() === 180;
};

const onClickHandler = () => {
  const isTriangle = calculateIsTriangle();

  if (isTriangle) {
    outputElement.innerText = "Yep, that's definetely a triangle";
  } else {
    outputElement.innerText =
      "Nope, that's not a triangle, maybe read about the conditions for a figure to be a triangle?";
  }
};

isTriangleButton.addEventListener("click", onClickHandler);
