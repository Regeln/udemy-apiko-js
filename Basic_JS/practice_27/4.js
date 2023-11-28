//Створити клас який містить поле name.
//Зробити так щоб це поле автоматично через 
//5с занулювалося(ставало null) після створення об’єкта
//Також добавити функцію(метод) цього класу яка буде 
//зупиняти(скасовувати) це занулювання

class TimerClass {
    constructor(name) {
        this.name = name;

        this.nullifyTimer = setTimeout(() => {
            this.name = null;
            console.log('Field name has been nullified.');
        }, 3000);
    }

    cancelNullifyTimer() {
        clearTimeout(this.nullifyTimer);
        console.log('Nullification canceled.');
    }
}

const obj = new TimerClass("Jack");

setTimeout(() => {
    obj.cancelNullifyTimer();
}, 5000);