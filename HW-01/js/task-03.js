'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userCancel = 'Отменено пользователем!';
const userSuccess = 'Добро пожаловать!';
const userError = 'Доступ запрещен, неверный пароль!';

const userInput = prompt('Введите пароль!');

if (userInput === null) {
    message = userCancel;
    alert(message);
} else if (userInput === ADMIN_PASSWORD) {
    message = userSuccess;
    alert(message);
} else if (userInput !== ADMIN_PASSWORD) {
    message = userError;
    alert(message);
};