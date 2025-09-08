var main = document.querySelector("html").style;
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getChar() {
  var random = Math.random();
  random = random * hex.length;
  random = Math.floor(random);

  return hex[random];
}

function generateColor() {
  let randomColor = "#";

  for (let position = 0; position < 6; position++) {
    randomColor += getChar();
  }

  console.log(randomColor);
  return randomColor;
}

function setRandom() {
  main.backgroundColor = generateColor();
}

function green() {
  main.backgroundColor = "green";
}
function red() {
  main.backgroundColor = "red";
}
function blue() {
  main.backgroundColor = "blue";
}
function yellow() {
  main.backgroundColor = "yellow";
}
