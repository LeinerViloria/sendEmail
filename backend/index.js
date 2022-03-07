import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRoute from "./routes/email.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/email", emailRoute);


app.listen(process.env.PORT, () =>
  console.log("Listening in port: " + process.env.PORT)
);