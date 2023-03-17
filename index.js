const express = require("express")
const { sequelize } = require("./config/db")
const { userRouter } = require("./routes/user.routes")
const app = express()

app.use(express.json())
app.use("/users",userRouter)

app.get("/",(req,res)=>{
    res.send("base api")
})

app.get("/saurav",(req,res)=>{
    res.send("hello saurav by 2")
})

app.listen(8000,async()=>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
    console.log("listening on port 8080")
})