const express = require('express');
require("./db/conn");
const student = require("./models/student")
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
// app.post("/student", (req, res) => {
//     console.log(req.body);
//     const user = new student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
// })
app.post("/student", async (req, res) => {
    const user = new student(req.body);
    try {
        console.log(req.body);
        const createuser = await user.save();
        res.status(201).send(createuser);
    } catch (e) {
        res.status(400).send(e);
    }
})
app.get("/student", async (req, res) => {
    try {
        const studentsdata = await student.find();
        res.send(studentsdata);
    } catch (e) {
        res.send(e)
    }
})
app.get("/student/:id" ,async(req,res)=>{
    try {
        
        const studentdata=await student.findById(_id);
    if(!studentdata){
        return res.status(404).send();
    }
    {
        res.send(studentdata)
    }
}catch(e){
    res.send(e)
}
})
app.patch("/student/:id",async(req,res)=>{
   try{ const _id=req.params.id
     const deletestudent = await student.findByIdAndUpdate(_id,req.body);
     res.send(deletestudent)
   }
   catch(e){
       res.status(404).send(e)
   }
})


app.listen(3000, (req, res) => {
    console.log(`app is running on port ${port}`)
});