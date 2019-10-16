var colors = ['red', 'blue', 'yellow', 'green'];

colors.forEach(function (color) {
   document.querySelector('#' + color + '-button').addEventListener('click', function () {
       document.querySelector('#color-name').textContent = color.toUpperCase();
       document.querySelector('.box').style.backgroundColor = color
   })
});