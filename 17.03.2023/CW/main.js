let time = 60;


const clock = document.getElementById('clock');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const stopBtn = document.getElementById('stopBtn');


function updateTime() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    clock.textContent = timeString;

    if (time <= 0) {
        clearInterval(intervalId); 
        clock.textContent = "Time is over"; 
    }
}

updateTime();

function decreaseTime() {
    time--;
    updateTime();
}

const intervalId = setInterval(decreaseTime, 1000);

increaseBtn.addEventListener('click', () => {
    time += 10;
    updateTime();
});

decreaseBtn.addEventListener('click', () => {
    time -= 10; 
    updateTime();
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    clock.textContent = "Timer stopped"; 
});
