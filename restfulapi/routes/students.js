const express = require('express')
const router = new express.Router()
const Student = require("../src/models/students");


router.get("/", (req, res) => {
    res.send("hello from home from saksham Jaiswal");
  });
  
  
  router.post("/students", async (req, res) => {
    try {
      const user = new Student(req.body);
      const createUser = await user.save();
      res.status(201).send(createUser);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  router.get("/students", async (req, res) => {
    try {
      const studentsData = await Student.find();
      res.send(studentsData);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  router.get("/students/:id", async (req, res) => {
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
  router.patch('/students/:id',async(req,res)=>{
    try{
      const _id = req.params.id;
    const updateStudents=   await Student.findByIdAndUpdate(_id,req.body)
    res.send(updateStudents)
    }catch(e){
      res.status(404).send(e)
  
    }
  })
  // delete request
  router.delete('/students/:id', async (req,res)=>{
   try{ const _id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(_id)
    if(!_id){
      return res.status(400).send();
    }
    res.send(deleteStudent)}catch(e){
      res.status(500).send(e)
    }
   
  })

module.exports=router