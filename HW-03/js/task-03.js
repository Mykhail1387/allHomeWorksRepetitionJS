'use strict';

const findBestEmployee = (emploees) => {
    const empKeys = Object.keys(emploees)

    let empName;
    let empBest = 0;

    for (const key of empKeys) {
        if (empBest < emploees[key]) {
            empBest = emploees[key];
            empName = key;
        }
    }
    return `${empName} - ${empBest}`

}


console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux