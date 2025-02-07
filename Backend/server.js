const express = require("express")
const app =express()
const PORT = process.env.PORT || 3000

///
app.use(express.json())

app.get('/getStudentInfo',(req,res) =>{
    res.send('Hello world')

})
app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`)
})

