$(document).ready(function () {

    var source = $('#todo-list-item-template').html()
    var todoTemplate = Handlebars.compile(source)

    // enter editor mode
    $('#todo-list')
        .on('dblclick', '.content', function(event) {
            $(this).prop('contenteditable', true).focus()
        })
        .on('blur', '.content', function(event) {
            var isNew = $(this).closest('li').is('.new')
            if (isNew) {
                // create todo list
                var todo = $(event.currentTarget).text()
                todo = todo.trim()

                if (todo.length > 0) {
                todo = {
                    is_complete: false,
                    content: todo,
                }
                var li = todoTemplate(todo);
                $(event.currentTarget).closest('li').before(li)
                }
                // clear new todo list item
                $(event.currentTarget).empty()
            }else {
                // update todo list
                $(this).prop('contenteditable', false)
            }
        })

});