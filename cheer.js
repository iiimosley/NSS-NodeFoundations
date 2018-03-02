let [, , ...name] = process.argv;
let letters = name.reduce((acc, cv) => acc + cv);

for (let i = 0; i < letters.length; i++) {
    let letter = letters[i].toUpperCase();
    setTimeout(() => {
        console.log(`Give me ${(/^A|E|F|I|L|M|N|O|R|S|X$/).test(letter) ? "an" : "a"} ${letter}!`);
    }, 1000 * i);
}

setTimeout(() => {
    console.log("What's that spell?");
}, 1000 * letters.length);

setTimeout(() => {
    console.log(`${name.join(" ")}!`);
}, (1000 * letters.length) + 700);