'use strict';

const formatString = (string) => {
    const maxLength = 40;
    const result = string.length > maxLength ? string.slice(0, 40) + '...' : string;
    return result;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
);





//====================можно и так===================

// const formatString = (string) => {
//     const maxLength = 40;
//     let shortenedString;

//     if (string.length > maxLength) {
//         return string.slice(0, 40) + '...';
//     } else {
//         return string;
//     }
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

// console.log(formatString('Curabitur ligula sapien.'));

// console.log(
//     formatString(
//         'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
// );
