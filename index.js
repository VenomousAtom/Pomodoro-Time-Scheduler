import express, { request } from "express";
import bodyParser from "body-parser";
import scheduler from "./routes/scheduler.js";

const app = express();

app.use(bodyParser.json());

app.use("/sch", scheduler);

app.get("/", (req, res) => {
    console.log("The Route is Running");

    res.send("Hello From Home Page");
});

app.listen(process.env.PORT, () => {
    console.log(`Server Running`)
});
