function addListeners() {
    var todos = $('.todo');
    todos.on('mouseenter', function () {
       $(this).find('.trash').css('display', 'block');
    });
    todos.on('mouseleave', function () {
        $(this).find('.trash').css('display', 'none');
    });
    $('.trash').on('click', function () {
        $(this).parent().remove();
    });
}

// call addListener()
addListeners();

$('#add-todo').on('click', function () {
   var todoValue = $('input').val();
   console.log(todoValue);
   if (todoValue) {
        var todoHTML = '<div class="todo-item todo">' +
            '<div class="todo-content">' +
           '<span>' + todoValue + '</span>' +
            '<img src="res/trash.png" class="trash" width="20" alt="">' +
           '</div>' +
           '</div>';
       $('#todo-box').append(todoHTML);
       addListeners()
   }
});

$(document).on('keypress', function (e) {
    if(e.key === 'Enter') {
        var todoValue = $('input').val();
        console.log(todoValue);
        if (todoValue) {
            var todoHTML = '<div class="todo-item todo">' +
                '<div class="todo-content">' +
                '<span>' + todoValue + '</span>' +
                '<img src="res/trash.png" class="trash" width="20" alt="">' +
                '</div>' +
                '</div>';
            $('#todo-box').append(todoHTML);
            addListeners()
        }
    }
});

// select the + sign
// declare a event listener on('click')
// in the function get the value of the input with .val()
// if the value wasn't null
//    store the html value of a todo_ in a new variable
//    select todos container and append the html with .append()
//    recall addListener again (why?)