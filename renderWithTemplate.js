let todos = [];
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const template = document.getElementById('todo-template');

function renderWithTemplate() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('.todo-text').textContent = todo;
        clone.querySelector('.delete-btn').onclick = () => deleteTodo(index);
        todoList.appendChild(clone);
    });
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderWithTemplate();
}

addBtn.addEventListener('click', () => {
    if(todoInput.value) {
        todos.push(todoInput.value);
        todoInput.value = '';
        renderWithTemplate();
    }
});