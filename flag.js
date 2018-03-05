#!/usr/bin/env node

const repl = require('repl');
const chalk = require('chalk');

const stripeAfterStar = " ".repeat(35);
const stripe = " ".repeat(50);

const even = num => num % 2 === 0;

let flag= "";

for (let i = 0; i < 13; i++) {
    if (even(i) && i<7) {
        flag += `${chalk.white.bgBlue(' * * * * * * * ')}${chalk.bgRed(stripeAfterStar)}\n`;
    } else if (!even(i) && i<7) {
        flag += `${chalk.white.bgBlue('  * * * * * *  ')}${chalk.bgWhite(stripeAfterStar)}\n`;
    } else if (!even(i)) {
        flag += `${chalk.bgWhite(stripe)}\n`;
    } else if (even(i)) {
        flag += `${chalk.bgRed(stripe)}\n`;
    }
}

console.log(flag);


// for (let i = 0; i < 13; i++) {
//     if ((/^0|2|4|6$/).test(i)){
//         flag += `${chalk.white.bgBlue(' * * * * * * * ')}${chalk.bgRed(stripeAfterStar)}\n`;
//     } else if ((/^1|3|5$/).test(i)) {
//         flag += `${chalk.white.bgBlue('  * * * * * *  ')}${chalk.bgWhite(stripeAfterStar)}\n`;
//     } else if ((/^7|9|11$/).test(i)) {
//         flag += `${chalk.bgWhite(stripe)}\n`;
//     } else if ((/^8|10|12$/).test(i)) {
//         flag += `${chalk.bgRed(stripe)}\n`;
//     }
// }