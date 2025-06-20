
import { mongoose } from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: string,
        required:true ,
        unique: true,
        lowercase: true,
    },
    password: {
        type: string,
        required:true
    },
    phoneNumber: {
        type: String,
    },
    isVerifyEmail: {
        type: Boolean,
        default: false,
    },

    role: {
        type: string,
        default: true,
    },
    bios: {

    },
    avatar: {
        type: string,
        default: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?20200919003010"

    }
})