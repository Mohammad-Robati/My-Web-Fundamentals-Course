document.querySelector('#red-btn').addEventListener('click', function () {
   document.querySelector('#color-text').textContent = 'RED';
   document.querySelector('.box').style.backgroundColor = 'red';
});

document.querySelector('#blue-btn').addEventListener('click', function () {
    document.querySelector('#color-text').textContent = 'BLUE';
    document.querySelector('.box').style.backgroundColor = 'blue';
});

document.querySelector('#yellow-btn').addEventListener('click', function () {
    document.querySelector('#color-text').textContent = 'YELLOW';
    document.querySelector('.box').style.backgroundColor = 'yellow';
});
document.querySelector('#green-btn').addEventListener('click', function () {
    document.querySelector('#color-text').textContent = 'GREEN';
    document.querySelector('.box').style.backgroundColor = 'green';
});