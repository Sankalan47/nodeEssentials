const fs = require("fs")
//to rename a file/directory
fs.renameSync("./assets/colors.json", "./assets/colorData.json");
//to move file
fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
    if(err){
        throw err;
    }
});
//this will delete the file after 4 sec of running the code!
setTimeout(() => {
    fs.unlinkSync("./assets/alex.jpg")
}, 4000);

// to remove a directory , you have to delete every files in that directory first

fs.readdirSync("./storage-files").forEach(fileName => {
    fs.unlinkSync(`./storage-files/${fileName}`);
});

fs.rmdir("./storage-files", err => {
    if(err) {
        throw err;
    }
});