import dotenv from "dotenv";
import connectionDB from "./db/index.js";
dotenv.config({
  path: "./env",
});

connectionDB()
  .then(() => {
    application.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Connection DB Failed ", error);
    process.exit(1);
  });

//===================================A code to connect to database in index.js which is not professional way to connect to database========================
// import express from "express";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
//     console.log("Connected to MongoDB");
//     app.on("error", (error) => {
//       console.error("Error", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error", error);
//     throw error;
//   }
// })();
