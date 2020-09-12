const { static } = require('express');
const express = require('express');
const path = require("path")
const app= express()
const PORT = process.env.PORT || 3000;
// app.get("/", (req,res)=>{
//     res.send({message:"Server"})
// })

const newPath = path.join(__dirname,"client","build")

app.use(express.static(newPath))
app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})