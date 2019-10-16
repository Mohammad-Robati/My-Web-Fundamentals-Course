$('div').css('backgroundColor', 'purple');

$('div.highlight').css('width','200px');

$('div#third').css('border', '1px solid orange');

$('div:nth-of-type(1)').css('color', 'pink');

$('div').on('click', function () {
    $('.box').toggleClass('show')
});