const fs = require("fs")

const colorData = require("./assets/colors.json")
//it will create a file and if filename exists it'll add the content at the end 
colorData.colorList.forEach(c =>{
    fs.appendFile("./storage-files/colors.md", `${c.color}: ${c.hex}\n`, err=> {
        if(err){
            throw err;
        }
    });
});