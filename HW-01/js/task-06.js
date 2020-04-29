'use strict';

const textForPrompt = 'Введите несколько чисел, и узнайте их сумму!'
let total = 0;
let input;

do {
    input = prompt(textForPrompt);

    input = Number(input)

    total += input;
} while (input) {

    alert(`Общая сумма чисел равна  ${total}`);
}
