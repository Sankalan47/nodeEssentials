const fs = require("fs");

const md = `

#this is a new file

we can write this file with fs.writeFile

*fs.readdir
*fs.readFile
*fs.writeFile



`;

fs.writeFileSync("./assets/notes.md", md.trim(), err => {

    if(err){
        throw(err);

    }
    console.log("file saved");
})