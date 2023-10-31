// 1) Створити ф-ію конструктор Calculator та до її 
// прототипу добавити два методи sum(a,b) та subtract(a,b)
// 2) Створити ф-ію конструктор AdvancedCalculator
// (наслідує методи від Calculator) та до її прототипу
// добавити два методи multiply(a,b) та divide(a,b)

function Calculator() { }

Calculator.prototype.sum = function (a, b) {
    return a + b;
}

Calculator.prototype.subtruct = function (a, b) {
    return a - b;
}

const calculator = new Calculator();
const resultSum = calculator.sum(5, 3);
const resultSubtruct = calculator.subtruct(5, 3);

console.log(resultSum);
console.log(resultSubtruct);

function AdvancedCalculator() {}

AdvancedCalculator.prototype = Object.create(Calculator.prototype);

AdvancedCalculator.prototype.multiply = (num1, num2) => {
    return num1 * num2;
}

AdvancedCalculator.prototype.divide = (num1, num2) => {
    if(num2 !== 0) {
        return num1 / num2;
    } else {
        return "Помилка: ділення на нуль";
    }
}

const advancedCalculator = new AdvancedCalculator();
const resultMultiply = advancedCalculator.multiply(10,2);
const resultDivide = advancedCalculator.divide(10,0);

console.log(resultMultiply);
console.log(resultDivide);