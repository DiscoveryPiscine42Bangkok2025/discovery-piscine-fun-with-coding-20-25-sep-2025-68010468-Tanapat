$(document).ready(function() {

    const todoListContainer = $('#ft_list');

    function addTodoToDOM(text) {
        
        const todoDiv = $('<div></div>').addClass('todo-item').text(text);
        todoListContainer.prepend(todoDiv);
    }

    function saveTodos() {
        
        const currentTodos = todoListContainer.children().map(function() {
            return $(this).text();
        }).get().reverse(); 

        const todosJSON = JSON.stringify(currentTodos);
        document.cookie = `todos=${encodeURIComponent(todosJSON)}; max-age=31536000; path=/`;
    }

    function loadTodos() {
        
        const cookie = document.cookie;
        if (cookie.includes('todos=')) {
            try {
                const todosJSON = decodeURIComponent(cookie.split('todos=')[1]);
                const todos = JSON.parse(todosJSON);
                todos.forEach(addTodoToDOM);
            } catch (e) {
                console.error("Error loading todos from cookie", e);
            }
        }
    }

    $('#new-btn').on('click', function() {
        
        const todoText = prompt('Enter a new TO DO:');
        if (todoText && todoText.trim() !== '') {
            addTodoToDOM(todoText.trim());
            saveTodos();
        }
    });


    todoListContainer.on('click', '.todo-item', function() {

        const text = $(this).text();
        if (confirm(`Do you want to remove this TO DO: "${text}"?`)) {
            $(this).remove(); 
            saveTodos();
        }
    });

    loadTodos();
});