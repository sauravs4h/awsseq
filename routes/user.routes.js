const {Router} = require("express")
const { User } = require("../models/user.models")


const userRouter = Router()


userRouter.get("/",async(req,res)=>{
   const data = await User.findAll()
    res.send(data)
})



module.exports ={userRouter}