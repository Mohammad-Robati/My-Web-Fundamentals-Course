var posts = document.querySelectorAll('.post');

posts.forEach(function (post) {
    post.style.backgroundColor = '#cef1f2';
});

function foo(elem) {
    var pos = 0;
    var tmp = false;
    setInterval(function(){
        if(tmp) {
            pos--;
            elem.style.left = pos + "px";
            if(pos === -150) tmp = !tmp;
        } else {
            pos++;
            elem.style.left = pos + "px";
            if(pos === 150) tmp = !tmp;
        }
    }, 5);
}

var h2 = document.querySelector('h2');
foo(h2);