import express from "express";

const router = express.Router();

router
  .route("/resources")
  .get((req, res) => {
    res.send("Get a random book");
  })
  .post((req, res) => {
    res.send("Add a book");
  });

export default router;
