const visited = document.querySelectorAll("input, select");
visited.forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.value) {
      this.classList.add("visited");
    } else {
      this.classList.remove("visited");
    }
  });
});
function textToNumber(variable) {
  variable = variable.replace(/[^0-9.,]/g, "");
  if (variable.includes(",")) variable = variable.replace(",", ".");
  return oneDot(variable);
}

function oneDot(variable) {
  const firstDotIndex = variable.indexOf(".");

  if (firstDotIndex === -1) return variable;
  if (firstDotIndex === 0) {
    variable = "0.";
    return variable;
  }
  const beforeDot = variable.slice(0, firstDotIndex + 1);
  let afterDot = variable.slice(firstDotIndex + 1);
  afterDot = afterDot.replace(".", "");
  afterDot = afterDot.slice(0, 3);

  return beforeDot + afterDot;
}
function calculation(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
  return (a * b) / c;
}
let elementIngredientContentsOther = document.querySelector("#ingredient-contents-other");
let elementIngredientContentsOtherUnit = document.querySelector("#ingredient-contents-other-unit");
let elementDoseContents = document.querySelector("#dose-contents");
let elementDoseContentsUnit = document.querySelector("#dose-contents-unit");
let elementIngredientContentsPolish = document.querySelector("#ingredient-contents-polish");
let elementIngredientContentsPolishUnit = document.querySelector("#ingredient-contents-polish-unit");
let elementResult = document.querySelector("#result");
let elementReset = document.querySelector("#reset");

document.addEventListener("input", function () {
  let result = 0;
  let otherIngredients = textToNumber(elementIngredientContentsOther.value);
  elementIngredientContentsOther.value = otherIngredients;
  let doseContents = textToNumber(elementDoseContents.value);
  elementDoseContents.value = doseContents;
  let polishIngredients = textToNumber(elementIngredientContentsPolish.value);
  elementIngredientContentsPolish.value = polishIngredients;

  result = calculation(otherIngredients, doseContents, polishIngredients);
  if (elementIngredientContentsPolishUnit.value === "%") {
    result /= 10;
    // if(elementIngredientContentsPolish.value)
  }
  if (elementIngredientContentsOtherUnit.value === "%") {
    result *= 10;
  }

  result = Math.round(result * 1000) / 1000;
  if (result !== Infinity && result !== 0 && !isNaN(result)) elementResult.innerHTML = result + " " + elementDoseContentsUnit.value;
});

elementReset.addEventListener("click", function () {
  let elements = [elementIngredientContentsOther, elementIngredientContentsOtherUnit, elementDoseContents, elementDoseContentsUnit, elementIngredientContentsPolish, elementIngredientContentsPolishUnit, elementResult];

  for (element of elements) {
    element.value = "";
    element.classList.remove("visited");
  }
  elementResult.innerHTML = "";
});
