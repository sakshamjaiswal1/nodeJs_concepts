const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("hello from home from saksham Jaiswal");

});

app.post("/students", (req, res) => {
  res.send("hello from students");
});

app.listen(port, () => {
  console.log(`connection is setup at port ${port}`);
});
