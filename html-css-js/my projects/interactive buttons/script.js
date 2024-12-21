const alertBtn = document.getElementById('al-btn');
const colorBtn = document.getElementById('color-btn');
const textBtn = document.getElementById('text-btn');
const bgBtn = document.getElementById('bg-btn');
const visibilityBtn = document.getElementById('visibility-btn');


function alertButton() {
    alert('Good job!');
}

function colorButton() {
    let colors = ['lightBlue', 'lightGreen', 'red', 'yellow', 'khaki'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBtn.style.backgroundColor = randomColor;
}

function textButton() {
    textBtn.innerText = 'Text has changed';
}

function bgButton() {
    let colors = ['white', 'lightblue', 'brown', 'orange', 'red', 'purple'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function visibilityButton() {
    let element = document.getElementById('element');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

alertBtn.addEventListener('click', alertButton);
colorBtn.addEventListener('click', colorButton);
textBtn.addEventListener('click', textButton);
bgBtn.addEventListener('click', bgButton);
visibilityBtn.addEventListener('click', visibilityButton);