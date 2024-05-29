const additem = document.getElementById("add");
const taskList = document.getElementById("task-list");

const addItemHandler = () => {
  const userInput = document.getElementById("input").value;
  if (userInput.trim() !== "") {
    const outputElement = document.createElement("li");
    outputElement.textContent = userInput;

    outputElement.addEventListener("click", () => {
      if (outputElement.style.textDecoration === "line-through") {
        outputElement.style.textDecoration = "none";
      } else {
        outputElement.style.textDecoration = "line-through";
      }
    });
    taskList.appendChild(outputElement);
    console.log(outputElement);
    document.getElementById("input").value = "";
  } else {
    alert("Please enter text in task list");
  }
};

additem.addEventListener("click", addItemHandler);
