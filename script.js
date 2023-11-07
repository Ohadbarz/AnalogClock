const mmOrssDegrees = 6; // 360 degrees for 60 mintues or seconds
const hhDegrees = 30; // 360 degrees for 12 hours
const hr = document.querySelector('.hour');
const mn = document.querySelector('.minute');
const sc = document.querySelector('.second');


function setTime() {
    let currDate = new Date();
    let hh = currDate.getHours() * hhDegrees; 
    let mm = currDate.getMinutes() * mmOrssDegrees; 
    let ss = currDate.getSeconds() * mmOrssDegrees; 
    console.log("Clock is running");
    hr.style.transform = `rotate(${hh + (mm / 2)}deg)`;
    mn.style.transform = `rotate(${mm}deg)`;
    sc.style.transform = `rotate(${ss}deg)`;
    
}


const btn = document.querySelector('.btn-switch');
btn.addEventListener('click', switchMode);

// swithc between light and dark mode
function switchMode() {
    btn.textContent = btn.textContent === 'Light Mode' ? 'Dark Mode' : 'Light Mode';
    document.documentElement.setAttribute('data-theme', btn.textContent === 'Light Mode' ? 'Light' : 'Dark');
}

document.documentElement.setAttribute('data-theme', 'Light');
btn.textContent = 'Dark Mode';




setTime();
setInterval(setTime, 1000);



