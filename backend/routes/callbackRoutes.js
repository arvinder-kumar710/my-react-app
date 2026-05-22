// backend/routes/callbackRoutes.js 
// 💡 Recommended file name for clarity: callbackRoutes.js

import express from "express";
import { addRequestCall } from "../controllers/callbackController.js";

const router = express.Router();

// 💡 The endpoint the frontend is hitting: POST http://localhost:5000/api/callback/add
router.post("/add", addRequestCall); 

export default router;