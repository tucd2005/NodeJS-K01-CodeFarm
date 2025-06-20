import MESSAGES from "../../common/contstants/messages.js";
import handleAsync from "../../common/utils/handleAsync.js";
import createResponse from "../../common/utils/response.js";
import createError from './../../common/utils/error.js';

export const authRegiser = handleAsync(async(req,res,next) => {
    const {email, password} = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser) {
        return next(createError(400, MESSAGES.AUTH.EMAIL_ALREADY_EXISTS))
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser= await User.create({
        ...req.body,
        password: hash,
        role: "guest",
    });

    if(!newUser) {
        return next(createError(500, MESSAGES.AUTH.REGISTER_SUCCESS))
    }

    newUser.password = undefined;
    return res.status(201).json(createResponse(true,201,MESSAGES.AUTH.REGISTER_SUCCESS, newUser));
})
    
    export const authLogin = handleAsync(async(req,res) => {
        const {email, password} = req.body;

        const existingUser = await User.findOne({email})
        if(!existingUser){
            return next(createError(500, MESSAGES.AUTH.EMAIL_ALREADY_EXISTS))
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch) {
            return next(createError(401, MESSAGES.AUTH.INVALID_PASSWORD))
        }
        user.password = undefined;

        return res.status(201).json(createResponse(true,201,MESSAGES.AUTH.LOGIN_SUCCESS,user))
    })