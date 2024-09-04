const userModel = require('../model/userModels')
const bcrypt = require('bcryptjs')

// register
const registerController = async (req,res)=>{
    try{
     const existingUser =  await userModel.findOne({email:req.body.email})
        if(existingUser){
            return res.status(200).send({messege:`User Already Exist`, success:false})
        }

        const password = req.body.password
        const salt  = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        req.body.password = hashedPassword

        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).send({messege:`Register successfully`, success:true})
    }catch(err){
        console.log(err);
        res.status(500).send({success:false, messege:`Register Controller ${err.messege}`})
        
    }
}
const loginController = ()=>{

}



module.exports = {loginController, registerController}