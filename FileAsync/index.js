const fs = require("fs");

// fs.writeFile("read.txt", "Today is a gerat day for coding", () => {
//   console.log("files is created");
//   console.log(err);
// });

// fs.appendFile("read.txt", " I will code for 8 hours", (err) => {
//   console.log("task completed");
// });

fs.readFile("read.txt", "UTF-8", (err, data) => {
  console.log(data);
});
