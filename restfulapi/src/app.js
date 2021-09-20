const { response } = require("express");
const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());

// crea

app.get("/", (req, res) => {
  res.send("hello from home from saksham Jaiswal");
});
// app.post("/students", (req, res) => {
//         console.log(req.body)
//     const user =  new Student(req.body)
//     user.save().then(()=>{
//         res.status(201).send(user)
//     }).catch((e)=>{
// res.status(400).send(e)
//     })

// });

app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (e) {
    res.status(400).send(e);
  }
});
app.get("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    res.send(studentData);
    if(!studentData){
      return res.status(404).send()
    }
    
  } catch (e) {
    res.status(500).send(e);
  }
});

// update the students by id
app.patch('/students/:id',async(req,res)=>{
  try{
    const _id = req.params.id;
  const updateStudents=   await Student.findByIdAndUpdate(_id,req.body)
  res.send(updateStudents)
  }catch(e){
    res.status(404).send(e)

  }
})
// delete request
app.delete('/students/:id', async (req,res)=>{
 try{ const _id = req.params.id;
  const deleteStudent = await Student.findByIdAndDelete(_id)
  if(!_id){
    return res.status(400).send();
  }
  res.send(deleteStudent)}catch(e){
    res.status(500).send(e)
  }
 
})

app.listen(port, () => {
  console.log(`connection is setup at port ${port}`);
});
