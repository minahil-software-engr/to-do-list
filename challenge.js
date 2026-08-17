// LocalStorage se data load karna, agar data na ho toh empty array
let todos = JSON.parse(localStorage.getItem('myTodos')) || [];

const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const template = document.getElementById('todo-template');

function render() {
    localStorage.setItem('myTodos', JSON.stringify(todos));
    
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('.todo-text').textContent = todo;
        
        clone.querySelector('.delete-btn').onclick = () => {
            todos.splice(index, 1);
            render();
        };
        
        todoList.appendChild(clone);
    });
}

addBtn.addEventListener('click', () => {
    const text = todoInput.value.trim();
    if(text !== '') {
        todos.push(text);
        todoInput.value = ''; 
        render();
    }
});
render();