// Первое

let Input1 = prompt("Первая строка:");
let Input2 = prompt("Вторая строка:");
let Input3 = prompt("Третья строка:");
let concatenate = Input1 + " " + Input2 + " " + Input3;

console.log("Результат: " + concatenate);

// Второе 

let Number = prompt("Введите пятизначное число:");
let split = Number.split("");

console.log("Разбитые цифры: " + split.join(" "));
