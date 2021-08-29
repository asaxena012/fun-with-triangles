const angleInputElements: NodeList = document.querySelectorAll(".angle-input");
const isTriangleButton = <HTMLInputElement>document.querySelector("button");
const outputElement = <HTMLDivElement>document.querySelector("#output");

const calculateSum = (): number => {
  let sum = 0;
  angleInputElements.forEach((angle): void => {
    sum += Number((<HTMLInputElement>angle).value);
  });
  return sum;
};

const calculateIsTriangle = (): boolean => {
  return calculateSum() === 180;
};

const onClickHandler = (): void => {
  const isTriangle: boolean = calculateIsTriangle();

  if (isTriangle) {
    outputElement.innerText = "Yep, that's definetely a triangle";
  } else {
    outputElement.innerText =
      "Nope, that's not a triangle, maybe read about the conditions for a figure to be a triangle?";
  }
};

isTriangleButton.addEventListener("click", onClickHandler);
