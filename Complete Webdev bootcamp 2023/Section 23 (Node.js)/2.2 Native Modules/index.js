const fs = require("fs");

// fs.writeFile("NodeMessage.txt", "Hello, NodeJS module Message", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved");
// });

fs.readFile("./NodeMessage.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});