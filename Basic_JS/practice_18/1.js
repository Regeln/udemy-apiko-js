// Global Scope: створити змінну в глобальній області видимості,
//     створити функцію і в тілі функції вивести цю змінну в консоль
// Function Scope: створити функцію, оголосити зміну всередині функції,
//     тоді спробувати вивести цю змінну в консоль всередині функції, та за межами функції
// Block Scope: Створити функцію, в функції написати блок { } всередині
//     якого оголосити змінну та вивести її в консоль, тоді вивести в консоль цю змінну 
// за межами блоку, та подивитись на результат


// Global Scope
var globalVar = "Global var";

function globalScope() {
    console.log(globalVar);
}

globalScope(); 
console.log(globalVar);

// Function Scope
function functionScope() {
    var functionVar = "Function variable";
    
    console.log(functionVar);
}

functionScope();
// console.log(functionVar); // Помилка: functionVar is not defined

// Block Scope
function blockScopeExample() {
    if (true) {
        let blockVar = "Block variable";
        
        console.log(blockVar);
    }    
    // console.log(blockVar); // Помилка: blockVar is not defined
}
blockScopeExample();