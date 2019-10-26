// create  todo list
$(document).ready(function () {

    $('li.new').find('.content').blur(function(event) {
        var todo = $(event.currentTarget).text()
        // 需要一個完整 todo list item 的架構
        var li = $('.template').find('li').clone()
        li.find('.content').text(todo)
        $(event.currentTarget).closest('li').before(li)

        // clear new todo list item
        $(event.currentTarget).empty()
    })

});