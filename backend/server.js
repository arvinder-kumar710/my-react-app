import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import studentRoutes from "./routes/studentRoutes.js";
import loginRoutes from './routes/loginRoutes.js';
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/students", studentRoutes);
app.use('/api', loginRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
