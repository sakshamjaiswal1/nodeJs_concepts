const express = require("express");
const path = require("path");
const bodyPareser = require("body-parser");
const mongoose = require("mongoose");
const User = require('./model/user')

mongoose.connect('mongodb://localhost:27017/login-app-db',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log('database is cnnected')).catch((e)=>console.log(e))
const port = process.env.PORT || 3000;

const app = express();
app.use("/", express.static(path.join(__dirname, "static")));
app.use(bodyPareser.json());
app.post("/api/register", async (req, res) => {
  console.log(req.body);
  res.json({
    status: "ok",
  });
});
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
