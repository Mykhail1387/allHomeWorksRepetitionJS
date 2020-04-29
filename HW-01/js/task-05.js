'use strict';

const textInPrompt = 'В какую страну Вы хотите заказать товар?';
const userCancel = 'Отменено пользователем!';
const notDelivery = 'В вашей стране доставка не доступна';
let price;
let countryName;

let userInput = prompt(textInPrompt);

if (userInput === null) {
    alert(userCancel);
} else if (userInput === '') {
    alert('Вы ничего не ввели!');
    location.reload()
} else {
    countryName = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();

    switch (countryName) {
        case 'Китай':
            price = 100;
            break;

        case 'Чили':
            price = 250;
            break;

        case 'Австралия':
            price = 170;
            break;

        case 'Индия':
            price = 80;
            break;

        case 'Ямайка':
            price = 120;
            break;

        default:
            alert('В вашей стране доставка не доступна');
    }
}

if (price > 0) {
    const message = `Доставка в ${countryName} будет стоить ${price} кредитов`;
    alert(message)
}