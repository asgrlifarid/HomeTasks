const allTodos = document.querySelector("#allTodos");
const completedTodos = document.querySelector("#completedTodos");
const pendingTodos = document.querySelector("#pendingTodos");
const clearTodos = document.querySelector("#clearAll");
const todoList = document.querySelector("#todoList");
const todoCount = document.querySelector("#todoCount");
const addButton = document.querySelector("#addButton");
const todoInput = document.querySelector("#todoInput");
// let todos = [];
let todos = loadTodosFromLocalStorage(); 

renderTodos(); 



addButton.addEventListener("click", function () {
  if (todoInput.value.trim() === "") return;
  const newTodo = {
    text: todoInput.value.trim(),
    competed: false,
  };
  todos.push(newTodo);
  todoInput.value = "";
  saveTodosToLocalStorage(todos);
  renderTodos();

  Swal.fire({
    title: "Ugurlu!",
    text: "elave edildi",
    icon: "success",
    confirmButtonText: "Okeyy",
  });
});

function renderTodos(filter = "all") {
  todoList.innerHTML = "";
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  filteredTodos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = todo.completed ? "completed" : "";
    li.innerHTML = `
      ${todo.text}
      <div class="todo-buttons">
        <button onclick="toggleCompleted(${index})">✔</button>
        <button onclick="deleteTodo(${index})">🗑</button>
      </div>
    `;
    todoList.appendChild(li);
  });

  updateTodoCount();
}

function toggleCompleted(index) {
  todos[index].completed = !todos[index].completed;
   saveTodosToLocalStorage(todos);  
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
   saveTodosToLocalStorage(todos);  
  renderTodos();

  Swal.fire({
    title: "silirsiz a ba menniy deyl !!",
    icon: "question",
    html: `
   Eger silseniz gedb qaytarib getiremmiyecem ha
  `,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Great!
  `,
    confirmButtonAriaLabel: "Thumbs up, great!",
    cancelButtonText: `
    <i class="fa fa-thumbs-down"></i>
  `,
    cancelButtonAriaLabel: "Close", 
  });
}
clearTodos.addEventListener("click", function () {
  todos = [];
   saveTodosToLocalStorage(todos);  
  renderTodos();
});

allTodos.addEventListener("click", function () {

  renderTodos("all");
});

completedTodos.addEventListener("click", function () {
  renderTodos("completed");
});

pendingTodos.addEventListener("click", function () {
  renderTodos("pending");
});

function updateTodoCount() {
  todoCount.textContent = `umumi ADD elediinin sayi
  : ${todos.length}`;
}


function saveTodosToLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos)); 
}

function loadTodosFromLocalStorage() {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    return []; 
  }
}
