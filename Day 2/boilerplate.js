const fs = require("fs");

const folderName = process.argv[2] || "Project";

const htmlBoilerplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
`;

try {
    // Create folder
    fs.mkdirSync(folderName);

    // index.html
    fs.writeFileSync(`${folderName}/index.html`, htmlBoilerplate);

    // style.css
    fs.writeFileSync(`${folderName}/style.css`, "");

    // app.js
    fs.writeFileSync(`${folderName}/app.js`, "");

} catch (err) {
    console.log("Error: ", err);
}