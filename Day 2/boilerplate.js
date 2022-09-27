const fs = require("fs");

const folderName = process.argv[2] || "Project";

try {
    fs.mkdirSync(folderName);

    // index.html
    fs.writeFileSync(`${folderName}/index.html`, "");

    // style.css
    fs.writeFileSync(`${folderName}/style.css`, "");

    // app.js
    fs.writeFileSync(`${folderName}/app.js`, "");
    
} catch (err) {
    console.log("Error: ", err);
}