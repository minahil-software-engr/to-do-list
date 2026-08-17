let todos = [];
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

function renderWithInnerHTML() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        todoList.innerHTML += `<li>${todo} <button onclick="deleteTodo(${index})">Delete</button></li>`;
    });
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderWithInnerHTML();
}

addBtn.addEventListener('click', () => {
    if(todoInput.value) {
        todos.push(todoInput.value);
        todoInput.value = '';
        renderWithInnerHTML();
    }
});