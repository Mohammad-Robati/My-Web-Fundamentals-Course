boxes = $('.box');

$('#slide-toggle').on('click',function () {
    if(boxes.css('display') === 'none')
        boxes.slideDown('slow');
    else
        boxes.slideUp('slow');
});

$('#fade-out').on('click', function () {
    boxes.fadeOut('slow');
});

$('#fade-in').on('click', function () {
    boxes.fadeIn('slow');
});

$('#fade-first-and-delete').on('click', function () {
    $('.box:nth-of-type(1)').fadeOut(1000, function () {
        $(this).remove();
    })
});