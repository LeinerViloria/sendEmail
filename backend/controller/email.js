import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const sendEmail = (req, res) => {
  const trasporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email,
      pass: process.env.pass
    },
  });

  let mailOption = {
    to: req.body.email,
    subject: req.body.subject,
    text: req.body.message
  };


  trasporter.sendMail(mailOption, (error, info) => {
    if (error) {
        console.log(error);
        return res.status(400).send({message: "error email or password"});
    } else {
        return res.status(200).send({message: "email enviado"});
    }
  });
};


export default {sendEmail}
