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
  if (variable.includes(",")) {
    variable = variable.replace(",", ".");
  }
  return oneDot(variable);
}

function oneDot(variable) {
  const firstDotIndex = variable.indexOf(".");

  if (firstDotIndex === -1) {
    return variable;
  }
  if (firstDotIndex === 0) {
    variable = "0.";
    return variable;
  }
  const beforeDot = variable.slice(0, firstDotIndex + 1);
  let afterDot = variable.slice(firstDotIndex + 1);
  afterDot = afterDot.replace(".", "");
  afterDot = afterDot.slice(0, 2);

  return beforeDot + afterDot;
}
