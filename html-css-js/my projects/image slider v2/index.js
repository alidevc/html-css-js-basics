const images = [
    "cat1.jpg",
    "cat2.jpg",
    "car.jpg", 
    "mountain.jpg"
];

let prevBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");
let img = document.getElementById("img-slide");

let currentIndex = 0;

function updateImg(){
   img.src = `./images/${images[currentIndex]}`;
}

function prevImg(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImg();
}

function nextImg(){
    currentIndex = (currentIndex + 1) % images.length;
    updateImg();
   
}

prevBtn.addEventListener("click", prevImg);
nextBtn.addEventListener("click", nextImg);

updateImg();