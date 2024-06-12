const additem = document.getElementById("add");
const taskList = document.getElementById("task-list");

const addItemHandler = () => {
  const userInput = document.getElementById("input").value;

  if (userInput.trim() !== "") {
    const outputElement = document.createElement("li");
    const listText = document.createElement("span");
    const cancelbtn = document.createElement("button");
    const textOnButton = document.createTextNode(" x ");
    cancelbtn.appendChild(textOnButton);

    cancelbtn.id = "cancel-id";
    listText.textContent = userInput;

    console.log(cancelbtn);

    listText.addEventListener("click", () => {
      if (listText.style.textDecoration === "line-through") {
        listText.style.textDecoration = "none";
      } else {
        listText.style.textDecoration = "line-through";
        listText.style.classList.toggle("checked");
      }
    });
    outputElement.appendChild(listText);
    taskList.appendChild(outputElement);
    outputElement.appendChild(cancelbtn);
    console.log(outputElement);
    cancelbtn.addEventListener("click", () => {
      taskList.removeChild(outputElement);
      outputElement.removeChild(cancelbtn);
    });
    document.getElementById("input").value = "";
  } else {
    alert("Please enter text in task list");
  }
};

additem.addEventListener("click", addItemHandler);
