import express from "express";
import dbConnection from "./config";
import cors from "cors";
import bodyParser from "body-parser";
import resources from "./resources";
import LectureDataSource from "./config";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/", resources);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
