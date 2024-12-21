const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

const currentYear = new Date().getFullYear();
const newYearDate = new Date(`January 1 ${currentYear + 1} 00:00:00`);

function countdown(){
    const currentDate = new Date();
    const time = newYearDate - currentDate;

    const d = Math.floor(time / 1000 / 60 / 60 / 24);
    const h = Math.floor(time / 1000 / 60 / 60) % 24;
    const m = Math.floor(time / 1000 / 60) % 60;
    const s = Math.floor(time / 1000) % 60;
    days.innerHTML = d.toString().padStart(2,"0");
    hours.innerHTML = h.toString().padStart(2,"0");
    mins.innerHTML = m.toString().padStart(2,"0");
    secs.innerHTML = s.toString().padStart(2,"0");
}

setInterval(countdown, 1000);