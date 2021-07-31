const fs = require("fs");

// creating a new file
// fs.writeFileSync("read.txt", "Welcome to nodeJs");

// fs.writeFileSync("read.txt", "Welcome to nodeJs by Saksham Jaiswal");

// append

// fs.appendFileSync("read.txt", "  Node js is great");

// const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);

// const org_data = buf_data.toString();
// console.log(org_data);

fs.renameSync("read.txt", "readWrite.txt");
