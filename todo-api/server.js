const express = require("express");
const cors = require("cors");

const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, task: "Learn JavaScript" },
  { id: 2, task: "Build a To-Do App" },
];
app.get("/todos", (req, res) => {
  res.json(todos);
});
app.post("/todos", (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: "Task is required" });

  const newTodo = { id: Date.now(), task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((todo) => todo.id !== id);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
