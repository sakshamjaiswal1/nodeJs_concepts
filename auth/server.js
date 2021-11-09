const express = require("express");
const path = require("path");
const bodyPareser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./model/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const JWT_SECRET= 'faewrfaewrfawerfaewrf45626tgdfgfgaqrfafawedfawefaefawefwaefaefa'

mongoose
  .connect("mongodb://localhost:27017/login-app-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database is cnnected"))
  .catch((e) => console.log(e));
const port = process.env.PORT || 3000;

const app = express();
app.use("/", express.static(path.join(__dirname, "static")));
app.use(bodyPareser.json());

app.post('/api/change-password', async (req, res) => {
	const { token, newpassword: plainTextPassword } = req.body
  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.json({ status: "error", error: "Invalid Password" });
  }
  if (plainTextPassword.length < 5) {
    return res.json({ status: "error", error: "Password too weak" });
  }
try{
	const user = jwt.verify(token, JWT_SECRET)
    console.log(user)
    const _id = user.id
    const password= await bcrypt.hash(plainTextPassword,10)
    await User.updateOne({_id},{
      $set:{password:password}
    })

}catch(error){

console.log(error)
res.json({status:'error',error:'security error'})
}

	
res.json({status:'ok'})

	
})
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).lean();
if (!user) {
  return res.json({ status: "error", error: "Invalid Username or Password" });
}

if (await bcrypt.compare(password, user.password)) {
  const token = jwt.sign({id:user._id,username:user.username},
    JWT_SECRET
  )
  return res.json({ status: "ok", data: token });
}
  res.json({ status: "error",error:'Invalid Username or password' });
});


app.post("/api/register", async (req, res) => {
  // console.log(req.body);
  const { username, password: plainTextPassword } = req.body;

  if (!username || typeof username !== "string") {
    return res.json({ status: "error", error: "Invalid username" });
  }
  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.json({ status: "error", error: "Invalid Password" });
  }
  if (plainTextPassword.length < 5) {
    return res.json({ status: "error", error: "Password too weak" });
  }
  const password = await bcrypt.hash(plainTextPassword, 10);
  // console.log( await bcrypt.hash(password,10))
  try {
    const response = await User.create({
      username,
      password,
    });
    console.log("user created successfully", response);
  } catch (error) {
    if (error.code === 11000) {
      return res.json({ status: "error", error: "Username already in use" });
    }
    throw error;
  }

  res.json({
    status: "ok",
  });
});
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
