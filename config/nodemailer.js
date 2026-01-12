import nodemailer from "nodemailer";
import { EMAIL_PASSWORD } from "./env.js";


export const accountEmail = "myopslogs@gmail.com";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: accountEmail,
    pass: EMAIL_PASSWORD,
  },
});

export default transporter;