'use strict';
const userError = 'Ошибка! Логин должен быть от 4 до 16 символов';
const loginHasAlready = 'Такой логин уже используется!';
const userSuccess = 'Логин успешно добавлен!';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = (login) => {
    return login.length >= 4 && login.length <= 16;

}

const isLoginUnique = (allLogins, login) => {
    const result = allLogins.includes(login);
    return !result;
}

const addLogin = (allLogins, login) => {
    const isValid = isLoginValid(login);
    if (!isValid) {
        alert(userError);
    }

    const isUnique = isLoginUnique(allLogins, login);
    if (!isUnique) {
        alert(loginHasAlready);
    }

    if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
        allLogins.push(login);
        alert(userSuccess)
    }
}

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log('logins:', logins)