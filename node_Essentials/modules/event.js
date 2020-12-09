const event = require("events");

const emitter = new event.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);;

})

// emitter.emit("custom event", "hello world", "computer");
// emitter.emit("custom event", "cool duh!", "sankalan");

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if(input === "exit"){
        emitter.emit("customEvent", "bye!", "process");
        process.exit();

    }
    emitter.emit("customEvent", input, "terminal")
});