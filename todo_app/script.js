let items = ["hello1", "hello2", "hello3"];

const itemsDiv = document.getElementById("items");

function renderItems() {
  itemsDiv.innerHTML = null;

  for (const [index, item] of Object.entries(items)) {
    const container = document.createElement("div");

    const task = document.createElement("p");
    let count = parseInt(index) + 1;
    task.textContent = count + ". " + item;

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.onclick = () => removeItem(index);

    container.appendChild(task);
    container.appendChild(button);

    itemsDiv.appendChild(container);
  }
}

function removeItem(index) {
  items.splice(index, 1);
  renderItems();
}

function addItem() {
  let newItem = document.getElementById("input");
  let newTask = newItem.value;
  console.log(newTask);
  items.push(newTask);
  newItem.value = "";
  renderItems();
}
renderItems();
