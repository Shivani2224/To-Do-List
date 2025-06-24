const apiUrl = "http://localhost:4000/todos";

const todoForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const todoList = document.getElementById("todo-list");

// Load todos from API and display
function loadTodos() {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((todos) => {
      todoList.innerHTML = "";
      todos.forEach((todo) => {
        const li = document.createElement("li");
        li.textContent = todo.task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = () => deleteTodo(todo.id);

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
      });
    })
    .catch((err) => console.error("Error loading todos:", err));
}

// Add new todo to API
function addTodo(task) {
  fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task }),
  })
    .then((res) => res.json())
    .then(() => loadTodos())
    .catch((err) => console.error("Error adding todo:", err));
}

// Delete todo by id
function deleteTodo(id) {
  fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  })
    .then(() => loadTodos())
    .catch((err) => console.error("Error deleting todo:", err));
}

// Handle form submit
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task) {
    addTodo(task);
    taskInput.value = "";
  }
});

// Initial load
loadTodos();
