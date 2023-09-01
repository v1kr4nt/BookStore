import express from "express";
import { PORT, mongoURI } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/");

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("App is connected to database");
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
