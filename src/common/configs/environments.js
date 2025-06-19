import dotenv from "dotenv"

dotenv.config({
    path: ".env", // Load biến môi trường từ file .env.{NODE_ENV}
    debug: true, // hiển thị thông báo debug
    encoding: "utf8", // Encoding của file .env
    silent: true, // Không hiển thị thông báo lỗi nếu file .env không tồn tại
    defaults: true, // Load các biến môi trường mặc định từ file .env.defaulrs
    ignoreProcessEnv: true, // không ghi đè các biến môi trường đã tồn tại trong process.env
    expand: true, // mở rộng các biến môi trường có giá trị là biến môi trường khác 
    assignToProcessEnv: true, // gán các biến môi trường vào process.env
    overrideProcessEnv: true, // ghi đè các biến môi trường đã tồn tại trong process.env
})
export const {DB_URI, HOST, PORT} = process.env