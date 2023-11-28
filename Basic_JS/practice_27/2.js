//Дано: обєкт Date та його методи 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//Створити ф-ію clock, яка імітує поведінку годинника: 
//кожну секунду виводить в консоль 
//час у форматі "Hours:Minutes:Seconds";

function format(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

function clock() {
    setInterval(function () {
        const currentDate = new Date();
        console.log(format(currentDate));
    }, 1000);
}

clock();