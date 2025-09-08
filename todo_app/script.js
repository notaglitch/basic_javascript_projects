function getValue() {
  let input = document.getElementById("newHabit");
  let value = input.value;

  //alert("New habit: " + value);
  input.value = "";
	
	document.querySelector("#habit").innerHTML = value
}
