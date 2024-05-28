const additem = document.getElementById("add");
const taskList = document.getElementById("task-list");

const addItemHandler = () => {
  const userInput = document.getElementById("input").value;
  if (userInput.trim() !== "") {
    const outputElement = document.createElement("li");
    outputElement.textContent = userInput;
    taskList.appendChild(outputElement);
    console.log(outputElement);
  } else {
    alert("Please enter text in task list");
  }
};

additem.addEventListener("click", addItemHandler);
