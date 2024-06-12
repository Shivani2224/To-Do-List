const additem = document.getElementById("add");
const taskList = document.getElementById("task-list");

const addItemHandler = () => {
  const userInput = document.getElementById("input").value;

  if (userInput.trim() !== "") {
    const outputElement = document.createElement("li");
    const cancelbtn = document.createElement("button");
    const textOnButton = document.createTextNode(" x ");
    cancelbtn.appendChild(textOnButton);

    cancelbtn.id = "cancel-id";
    outputElement.textContent = userInput;

    console.log(cancelbtn);

    outputElement.addEventListener("click", () => {
      if (outputElement.style.textDecoration === "line-through") {
        outputElement.style.textDecoration = "none";
      } else {
        outputElement.style.textDecoration = "line-through";
        outputElement.style.classList.toggle("checked");
      }
    });
    taskList.appendChild(outputElement);
    outputElement.appendChild(cancelbtn);
    console.log(outputElement);
    cancelbtn.addEventListener("click", () => {
      taskList.removeChild(outputElement);
      outputElement .removeChild(cancelbtn);
    });
    document.getElementById("input").value = "";
  } else {
    alert("Please enter text in task list");
  }
};

additem.addEventListener("click", addItemHandler);
