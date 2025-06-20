
import handleAsync from './../../common/utils/handleAsync.js';
import createError from './../../common/utils/error.js';
export const authRegister = handleAsync(async(req,res) => {
    const {email, password} = req.body;
    const existingUser = await UserActivation.findOne({email});
    if(existingUser){
        return next(createError(400, MESSAGES.AUTH.EMAIL_ALREADY_EXISTS));
    }
})

export const authLogin = handleAsync(async(req,res) => {

})