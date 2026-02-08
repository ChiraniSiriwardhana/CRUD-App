//decide what kind of respond send to the request.Descission makers. they handle the request
import {User} from '../models/user.model.js';
const registerUser = async (req,res)=>{

//inside registerUser it has const { username, email, password } = req.body;
// Ex - req.body.username , req.body.email ,req.body.password
    try {
        const {username,password,email} = req.body;
        //basic validation 
        if(!username || !password || !email){
            return res.status(400).json({message:"All fields are required"});
        }

        //check if user already exists
        const existingUser = await User.findOne({email:email.toLowerCase()});
        if(existingUser){
            return res.status(400).json({message:"User with this email already exists"});
        }

        //create new user
        const user =await User.create({
            username,
            email:email.toLowerCase(),
            password,
            loggedIn:false
        })
        res.status(201).json({
            message:"User registered successfully",
            user:{_id:user._id, username:user.username, email:user.email}});
    }
    catch(error){
        res.status(500).json({message:"Internal server error", error:error.message});

    }
};

const loginUser = async (req,res)=>{
    try{
        //check user is already exist/logged in
        const {email,password} = req.body;
        const user =await User.findOne({email:email.toLowerCase()});
        if(!user){
            return res.status(400).json({message:"User with this email does not exist"});
        }

        //compare password
        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid password"});
        }
        res.status(200).json({
            message:"User logged in successfully", 
            user:{
                id:user._id, 
                username:user.username, 
                email:user.email
            }
        });

    }
    catch(error){
        res.status(500).json({message:"Internal server error", error:error.message});

    }
}

const logoutUser = async (req,res)=>{
    try{
        const {email} =req.body;
        const user = await User.findOne({email:email.toLowerCase()});
        if(!user){
            return res.status(400).json({
                message:"User not found"
            });
        }
        res.status(200).json({
            message:"User logged out successfully"
        });

    }
    catch (error){
        res.status(500).json({message:"Internal server error", error:error.message});

    }
}

export{
    registerUser,
    loginUser,
    logoutUser
}                