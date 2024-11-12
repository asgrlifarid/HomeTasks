
const value1Input = document.querySelector('input[placeholder="Value1"]');
const value2Input = document.querySelector('input[placeholder="Value2"]');
const resultInput = document.querySelector(".calculator-result input");
const addButton = document.querySelector(".calculator-addition button");
const subtractButton = document.querySelector(".calculator-substract button");
const multiplyButton = document.querySelector(".calculator-multiply button");
const divideButton = document.querySelector(".calculator-division button");
const resetButton = document.querySelector(".calculator-reset button");


function calculate(operator) {
  const value1 = parseFloat(value1Input.value);
  const value2 = parseFloat(value2Input.value);

  
 

  let result;
  switch (operator) {
    case "add":
      result = value1 + value2;
      break;
    case "subtract":
      result = value1 - value2;
      break;
    case "multiply":
      result = value1 * value2;
      break;
    case "divide":
     
      result = value1 / value2;
      break;
  }
  resultInput.value = result;
}


addButton.addEventListener("click", () => calculate("add"));
subtractButton.addEventListener("click", () => calculate("subtract"));
multiplyButton.addEventListener("click", () => calculate("multiply"));
divideButton.addEventListener("click", () => calculate("divide"));


resetButton.addEventListener("click", () => {
  value1Input.value = "";
  value2Input.value = "";
  resultInput.value = "";
});
