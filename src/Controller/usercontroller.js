import { User } from "../Models/userModel.js";

export const getusers = async (req,res)=>{
    try{
        console.log(req.query)
        
        const response = await User.find({})
        res.send(response);
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}

export const saveusers = async (req, res) => {
    try {
        const response = await new User(req.body).save();
        res.send(response);

    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}