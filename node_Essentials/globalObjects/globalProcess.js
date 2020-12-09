//this will show you the process ids

console.log(process.pid);

// this code will show you the version of node youre using
console.log(process.versions.node);

//this returns an array the first thing is which is needed to run the process which in case is node
//the second is the file youre running along with the path
console.log(process.argv);

// you can add more values in that array by the terminal
const [, , firstName, lastName] = process.argv;

console.log(`your name is ${firstName} ${lastName}`);

//now while running the file enter your name in the terminal along with the run comman to get the out put
//node globalProcess Sankalan Dasgupta

//you can pass arguments too!

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);

//go to your terminal and run the file : node globalProcess --user sankalan --greeting "hello"
