const fs = require("fs");

// console.log(fs);

fs.mkdir("Dogs", { recursive: true }, (err) => {
    console.log("In the callback.");
    if (err) throw err;
});

console.log("I come after mkdir");
