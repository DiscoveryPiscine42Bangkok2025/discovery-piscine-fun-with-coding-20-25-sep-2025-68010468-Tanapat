$(document).ready(function() {
    const todoListContainer = $('#ft_list');

    function loadTodos() {
        const cookie = document.cookie;
        if (cookie.includes('todos=')) {
            const todosJSON = decodeURIComponent(cookie.split('todos=')[1]);
            JSON.parse(todosJSON).forEach(addTodoToDOM);
        }
    }

    function saveTodos() {
        const currentTodos = todoListContainer.children().map(function() {
            return $(this).text();
        }).get().reverse();
        document.cookie = `todos=${encodeURIComponent(JSON.stringify(currentTodos))}; max-age=31536000; path=/`;
    }

    function addTodoToDOM(text) {
        const todoDiv = $('<div></div>').addClass('todo-item').text(text);
        todoListContainer.prepend(todoDiv);
    }

    $('#new-btn').on('click', function() {
        const todoText = prompt('Enter a new to-do:');
        if (todoText && todoText.trim() !== '') {
            addTodoToDOM(todoText.trim());
            saveTodos();
        }
    });

    todoListContainer.on('click', '.todo-item', function() {
        if (confirm(`Do you really want to remove this item: "${$(this).text()}"?`)) {
            $(this).remove();
            saveTodos();
        }
    });

    loadTodos();
});