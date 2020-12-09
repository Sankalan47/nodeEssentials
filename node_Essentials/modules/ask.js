const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("how're ya doin?", answer => {
    console.log(`answer: ${answer}`);
});