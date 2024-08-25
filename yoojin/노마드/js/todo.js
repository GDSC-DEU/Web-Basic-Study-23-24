const toDoFrom = document.getElementById("todo-form");
const toDoInput = toDoFrom.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
}

toDoFrom.addEventListener("submit", handleToDoSubmit);
