let todos = [];
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

function renderWithCreateElement() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.onclick = () => deleteTodo(index);
        
        li.appendChild(delBtn);
        todoList.appendChild(li);
    });
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderWithCreateElement();
}

addBtn.addEventListener('click', () => {
    if(todoInput.value) {
        todos.push(todoInput.value);
        todoInput.value = '';
        renderWithCreateElement();
    }
});