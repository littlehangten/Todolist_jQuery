$(document).ready(function () {

    var source = $('#todo-list-item-template').html()
    var todoTemplate = Handlebars.compile(source)

    // create  todo list
    $('li.new').find('.content').blur(function(event) {
        var todo = $(event.currentTarget).text()
        todo = todo.trim()

        if(todo.length > 0 ) {
            todo = {
                is_complete: false,
                content: todo,
            }
            var li = todoTemplate(todo);
            $(event.currentTarget).closest('li').before(li)
        }
        // clear new todo list item
        $(event.currentTarget).empty()
    })

});