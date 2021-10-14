const { response } = require("express");
const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const studentRouter=require('../routes/students')
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());

// creating router
app.use(studentRouter)


app.listen(port, () => {
  console.log(`connection is setup at port ${port}`);
});
