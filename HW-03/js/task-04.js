'use strict';

const countTotalSalary = (emploees) => {
    const values = Object.values(emploees)
    let total = 0;
    for (const val of values) {
        total += val;
    }
    return total;
}

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
); // 330

console.log(
    countTotalSalary({
        kiwi: 200,
        lux: 50,
        chelsy: 150,
    }),
); // 400