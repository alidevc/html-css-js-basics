// counter program
const decreseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const countLabel = document.getElementById('countLabel');
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

//calculate for radius
/* const PI = 3.14159;
let radius;
let circumference;

document.getElementById('submit-btn').onclick = function(){
    radius = document.getElementById('radius-value').value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById('myH3').textContent = circumference + " cm";
}    */