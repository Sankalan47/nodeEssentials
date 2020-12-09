//process.stdout helps to give output using write method

// process.stdout.write("hey!");
// process.stdout.write("\n\n\n heyyyy!");


//now lets make an question answer app
const questions  = [
    "your name?",
    "Do you love code with coffee?",
    "fav programming language?"
];

const ask = (i=0) => {
    process.stdout.write(`\n\n\n${questions[i]}`);
    process.stdout.write(` > `);
};
ask(); 

const answers = [];
//following function will take the user input data and show it as a result!
process.stdin.on('data', data => {
    answers.push(data.toString().trim());
    if(answers.length < questions.length) {
        ask(answers.length);

    } else{
        process.exit();
    }
});

process.on('exit', () => {
    
    console.log ("thank you");
})