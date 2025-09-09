function check() {
  var word = document.querySelector("#word");
  var value = word.value;
  word.value = "";
  const reversed = value.split("").reverse().join("");
  if (value == reversed) {
    alert(value + " is a palindrome");
  } else {
    alert(value + " in not a palindrome");
  }
}
