import { User } from "../../Models/userModel.js"

export const register = async (req,res) =>{
    try{
        const resdata=await User(req.body).save();
        res.send({message:"Successfully registered"});
    }
    catch(err){
      console.log(err)

    }

}