//importing modules
const path = require("path");


//this line will show you in which directory youre in
console.log(__dirname);
//this will show you the file name and the directory
console.log(__filename);

//using the path module you can also get the file name in the following way
console.log(`file name is ${path.basename(__filename)}`);