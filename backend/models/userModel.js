import  mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique:true },
        password: { type: String, required: true, minlength: 5 },
        passwordCheck: {  type: String,  minlength: 5 },
        userName: { type: String, unique: true},
        isAdmin: { type: Boolean, default: false, required: true },  
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema); 
export default User;