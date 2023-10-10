// Дано: функція яка приймає масив елементів будь-яких типів
// Результат: вивести у консоль масив який містить лише стрічки початкового масиву
// Приклад:
// [2, “string”, 3, , , ”test”] => [“string”, “test”]

const arr = [2, "string", 3, , , "test"];

function filterArray(initialArray) {
    let resultArray = initialArray.filter(item => typeof item === "string");
    return resultArray;
}

console.log(filterArray(arr));
