const fs = require('fs');

fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {

    console.log(text);

});



fs.readFile("./assets/alex.jpg", (err, img) => {
    if(err){
        console.log(`error occured ${err.message}`);
        process.exit();
    }
    console.log(img);

});

