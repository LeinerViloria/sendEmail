import emailController from "../controller/email.js";
import express from "express";


const router = express.Router();

router.post("/sendEmail", emailController.sendEmail);

export default router;
