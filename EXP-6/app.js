const http = require("http");
const os = require("os");
const path = require("path");
const EventEmitter = require("events");
console.log("Platform:", os.platform());
console.log("Free Memory:", os.freemem());
console.log("File Name:", path.basename(__filename));
const event = new EventEmitter();
event.on("welcome", () => {
    console.log("Welcome event triggered");
});
const server = http.createServer((req, res) => {
    event.emit("welcome");

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Hello! Welcome to Node.js server");
});
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});