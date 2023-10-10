// Дано: функція яка приймає масив чисел або стрічок.
// Результат: вивести у консоль масив унікальних значень початкового масиву
// Приклад: [2, 3, 1, 3, 3, 7] => [2,3,1,7]

function unicFn(initialArray) {
    const uniqueSet = new Set(initialArray);
    const uniqueArray = [...uniqueSet];
    return uniqueArray;
}

const inputArray = [2, 3, 1, 3, 3, 7];
const resultArray = unicFn(inputArray);

console.log(resultArray);