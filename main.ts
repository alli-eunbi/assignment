import AppDataSource from "./config/config";
// import { User } from "../entity/User"
import express from "express";

const app = express();
const port = 3000;
import resources from "./resources";

app.use("/", resources);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
