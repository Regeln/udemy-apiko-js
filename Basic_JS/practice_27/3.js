//Створити ф-ію timer, яка приймає 
//число(секунди) та імітує поведінку таймера:
//кожну секунду виводить в консоль стрічку Timer:
//${s}, де ${s} - кількість секунд що залишилось

function timer(seconds) {
    let timeLeft = seconds;

    function updateTimer() {
        console.log(`Timer: ${timeLeft--}s`);
        if (timeLeft < 0) {
            clearInterval(interval);
            console.log('Timer finished.');
        }
    }

    const interval = setInterval(updateTimer, 1000);
}

timer(30);