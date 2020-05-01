'use strict';

let input;
const numbers = [];
let total = 0;
const userError = 'Было введено не число, попробуйте еще раз';

do {
    input = prompt('Введите число!');

    if (input === '' || isNaN(input)) {
        alert(userError);
    } else if (input !== null) {
        numbers.push(Number(input));
    }
} while (input !== null);

for (const number of numbers) {
    total += number;
}
console.log(`Общая сумма чисел равна [${total}]`);