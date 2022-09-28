const figlet = require("figlet");
require("colors");
const xmas = require("xmas-tree");

console.log(xmas({ color: true }));

figlet("GetPerolled!", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.rainbow);
});