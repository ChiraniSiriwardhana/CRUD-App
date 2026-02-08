
//sser model that will be used to collect user data from authentication


import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new Schema(
    {
        username :{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,// to remove extra spaces/white spaces
            minLength:1,
            maxLength:30
        },
        password :{
            type:String,
            required:true,
            minLength:6,
            maxLength:50
        },
        email :{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,// to remove extra spaces/white spaces
        
        },
       

    },

    {
        timestamps:true
    }

)

//before saving password we have to hash it
userSchema.pre("save", async function(){
    if(!this.isModified("password")){  //dont need to hash password if it is not modified. so user doesnt need to hash it again and again if not modified 
        return;
    }
    this.password = await bcrypt.hash(this.password,10); //hash the password with salt rounds of 10
});
// compare the password entered by user with the hashed password in database
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}
export const User = mongoose.model("User",userSchema)