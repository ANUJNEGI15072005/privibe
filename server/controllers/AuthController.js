const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config()
const UserModel =require("../models/user");

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });
  };
  const signup = async(req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await UserModel.findOne({ email });
      if (user) {
        return res.status(409).json({
          message: 'User already exists, you can login',
          success: false
        });
      }
  
      const userModel = new UserModel({ name, email, password });
      userModel.password = await bcrypt.hash(password, 10); 
      await userModel.save(); 
  
      const token = signToken(userModel._id); 
  
      res.status(201).json({
        message: "Signup successful",
        success: true,
        data: {
          token,
          name: userModel.name,  
          email: userModel.email
        }
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        success: false
      });
    }
  };
  

const login = async(req, res) =>{
     try{
        console.log(process.env.JWT_SECRET)
        const { email, password} = req.body;
        const user = await UserModel.findOne({ email });
        const correct = await user.correctPassword(password, user.password);
        if (!correct) {
          return next(new Error("Incorrect Password"));
        }
        console.log(user)
    
        if(!user){
            return res.status(409)
               .json({message: 'Auth failed email or password is wrong', success:false});
        }
    
     
         const token = signToken(user._id);
        res.status(200)
            .json({
                message:"Login successfully",
                success: true,
                token,
                email,
                name: user.name
            })
    }catch({name,message}) {
        res.status(500)
            .json({
                status: name,
                message
            })
    }
}

module.exports ={
    signup,
    login
}
