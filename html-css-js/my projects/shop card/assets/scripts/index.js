let item = document.querySelector('.item-amount p');
let buttons = document.querySelectorAll('.item-amount button');
let incBtn = buttons[1];
let decBtn = buttons[0];
let count = 0;

incBtn.onclick = function(){
    count++;
    item.textContent = count;
}

decBtn.onclick = function(){
    if (count > 0) { 
        count--;
        item.textContent = count; 
    }
}