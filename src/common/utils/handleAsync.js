const handleAsync = (fn) => (req, res, next) => 
    {
    // Promise.resolve(fn(req,res,next)).catch((error)=> next(createError(500,error.message|| "Đã xảy ra lỗi")))
    Promise.resolve(fn(req,res,next)).catch((error)=> next(err))
}
export default handleAsync