'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const userAskPrompt = 'Какое количество дроидов Bы хотите купить?';
const cancel = 'Отменено пользователем!';
const notEnoughtCredits = 'Недостаточно средств на счету!';

let userInput = prompt(userAskPrompt);

userInput = Number(userInput);

if (userInput === null) {
    console.log(cancel);
}

const totalPrice = userInput * pricePerDroid;

if (totalPrice > credits) {
    console.log(notEnoughtCredits)
} else {
    const balanceCredits = credits - totalPrice;
    console.log(`Вы купили ${userInput} дроидов, на счету осталось ${balanceCredits} кредитов.`)
}