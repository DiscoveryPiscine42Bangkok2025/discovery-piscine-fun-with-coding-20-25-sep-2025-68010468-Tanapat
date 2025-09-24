document.addEventListener('DOMContentLoaded', () => {
    const todoListContainer = document.getElementById('ft_list');
    const newButton = document.getElementById('new-btn');
    function addTodo(text) {
        const todoDiv = document.createElement('div');
        todoDiv.className = 'todo-item';
        todoDiv.textContent = text;
        todoDiv.addEventListener('click', () => {
            if (confirm(`Do you want to remove this TO DO: "${text}"?`)) {
                todoDiv.remove(); 
                saveTodos(); 
            }
        });
        todoListContainer.prepend(todoDiv);
    }

    function saveTodos() {
        const todos = [];
        document.querySelectorAll('.todo-item').forEach(item => {
            todos.push(item.textContent);
        });
        const todosJSON = JSON.stringify(todos.reverse());
        document.cookie = `todos=${encodeURIComponent(todosJSON)}; max-age=31536000; path=/`;
    }

    function loadTodosFromCookie() {
        const cookies = document.cookie.split('; ');
        const todoCookie = cookies.find(cookie => cookie.startsWith('todos='));
        
        if (todoCookie) {
            try {
                const todosJSON = decodeURIComponent(todoCookie.split('=')[1]);
                const todos = JSON.parse(todosJSON);
                todos.forEach(todoText => addTodo(todoText));
            } catch (error) {
                console.error('Error parsing To-Do cookie:', error);
            }
        }
    }


    newButton.addEventListener('click', () => {
        const todoText = prompt('Enter a new TO DO:');

        if (todoText && todoText.trim() !== '') {
            addTodo(todoText.trim()); 
            saveTodos(); 
        }
    });

    loadTodosFromCookie();
});