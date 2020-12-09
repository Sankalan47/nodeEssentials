//understanding the child process module
const cp = require("child_process");
//exec commands executes any synchronous proccesses
cp.exec("open http://www.youtube.com");
cp.exec("open -a Terminal .");
cp.exec("ls", (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data);
});

