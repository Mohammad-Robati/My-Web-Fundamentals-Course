var test = document.getElementById('test');

test.addEventListener('mouseover', function () {
    test.textContent = 'Stop hovering over me!!'
});

test.addEventListener('mouseleave', function () {
    test.textContent = "Oooh That's a relief!!!"
});

test.addEventListener('click', function () {
    test.textContent = 'You have clicked on me!!'
});

window.addEventListener('keydown', function (e) {
    console.log(e);
    test.textContent = 'You have pressed ' + '\"' + e.key + '\"' ;
});

