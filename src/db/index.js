import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`);
    console.log(
      `Connected to MongoDB with instance ${connectionInstance}!! DB HOST : ${connectionInstance.connection.host} `
    );
  } catch (error) {
    console.error("Error", error);
    process.exit(1);
  }
};

export default connectionDB;
