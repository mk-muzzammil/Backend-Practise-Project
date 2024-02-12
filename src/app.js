import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: "process.env.CORS_ORIGIN",
    credentials: true,
  })
);

app.use(express.json({ limit: "15kb" }));
app.use(express.urlencoded({ extended: true, limit: "15kb" })); //extended true means it can parse nested object;express.urlencoded is used to parse the data coming from the form from URL and limit is used to limit the size of the data coming from the form
app.use(express.static("public")); //express.static is used to serve the static files like images,css,html,etc
app.use(cookieParser()); //cookieParser is used to parse the cookie from the request

export default app;
