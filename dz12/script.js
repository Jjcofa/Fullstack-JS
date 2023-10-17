// Первое

let userInput1 = prompt("Первая строка:");
let userInput2 = prompt("Вторая строка:");
let userInput3 = prompt("Третья строка:");
let concatenate = userInput1 + " " + userInput2 + " " + userInput3;

console.log("Результат: " + concatenate);

// Второе 

let userNumber = prompt("Введите пятизначное число:");
let split = userNumber.split("");

console.log("Разбитые цифры: " + split.join(" "));
