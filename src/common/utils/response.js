const createResponse = (success,message, statusCode, data) => {
    return{
        success, 
        status: statusCode,
        message,
        data: data || null
    }
}
export default createResponse