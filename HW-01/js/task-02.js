'use strict';

const total = 100;
const ordered = 50;

const messageSuccec = "Заказ оформлен, с вами свяжется менеджер";
const messageNotEnought = "На складе недостаточно твоаров!";

if (total > ordered) {
    console.log(messageSuccec)
} else {
    console.log(messageNotEnought)
};