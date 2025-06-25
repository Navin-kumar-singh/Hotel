import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";
// import router from "./utils/route/user.route.js";
import db from "./utils/database/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhoooks from "./utils/controller/userController.js";


const app = express();
const PORT = process.env.PORT;

app.use(clerkMiddleware())
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/api", router);
app.use("/api/clerk", clerkWebhoooks)

app.get("/", (req, res) => {
  res.send("Welcome to backend");
});

app.listen(PORT, () => {
  console.log(`Your server is created on the port http://localhost:${PORT}`);
  db();
});
