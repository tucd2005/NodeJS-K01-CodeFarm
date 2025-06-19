import express from "express";
import connectDB from './src/common/configs/connectDB.js';
import router from './src/routes/index.js';
import errorHandler from './src/common/middlewares/errorHandle.js';
import { HOST, PORT } from "./src/common/configs/environments.js";
import setupSwagger from "./src/common/configs/swagger-config.js";
import cors from "cors"
connectDB();

const app = express();

app.use(express.json());

app.use(
	cors({
		origin: "http://localhost:5173", 
		credentials: true
	})
)

app.use("/api", router);

setupSwagger(app);

app.use(errorHandler);

app.listen(PORT, HOST, () => {
	console.log(`Server is running on: http://${HOST}:${PORT}/api`);
	console.log(`Swagger Docs available at http://${HOST}:${PORT}/api-docs`);
});
