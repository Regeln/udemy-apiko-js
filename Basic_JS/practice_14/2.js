// Дано: функція яка приймає масив чисел
// Результат: вивести у консоль "YES" якщо усі числа у масив парні та "NO" в іншому випадку
// Приклад:
// [1, 2, 3, 9] => “NO”
// [2, 4, 6] => “YES”

let oddArray = [1, 2, 3, 9]
let evenArray = [2, 4, 6]

function isEvenArray(initialArray) {
    for (let i = 0; i < initialArray.length; i++) {
        if (initialArray[i] % 2 !== 0) {
            console.log("NO");
            return;
        }
    }
    console.log("YES");
}

isEvenArray(oddArray);
isEvenArray(evenArray);
