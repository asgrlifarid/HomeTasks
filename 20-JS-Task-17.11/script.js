const allTodos=document.querySelector("#allTodos")
const completedTodos=document.querySelector("#completedTodos")
const pendingTodos=document.querySelector("#pendingTodos")
const clearTodos=document.querySelector("#clearAll")
const todoList=document.querySelector("#todoList")
const todoCount=document.querySelector("#todoCount")
const addButton=document.querySelector("#addButton")
const todoInput=document.querySelector("#todoInput")

let todos=[];


addButton.addEventListener("click", function () {
    if (todoInput.value.trim()==="") return;
    const newTodo = {
    text:todoInput.value.trim(), 
    competed:false,
    };
    todos.push(newTodo);
    todoInput.value=""
    renderTodos();
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

function toggleCompleted(index){
    todos[index].completed=!todos[index].completed 
    renderTodos();
}


function deleteTodo(index){
    todos.splice(index,1);
    renderTodos();
}
clearTodos.addEventListener("click",function(){
todos=[];
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