//making the question answer app using readline module :)
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const questions = [

    "whats your name?",
    "where ya livin son?",
    "hmm...youre using nodejs...kinda sus to me! you love it?"

];
const collectAnswers = (questions, done) => {
    const answers = [];
    const [firstQuestion] = questions;

    const questionAnswered = answer =>{
        answers.push(answer);
        if(answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered);

        } else {
            done(answers);
        }
    }
    rl.question(firstQuestion, questionAnswered);

}


collectAnswers(questions, answers => {
    console.log("thanks for telling me!");
    console.log(answers);
    process.exit();
})

