import { Resource } from "./entities/resource.entity";
import { Metadata } from "./entities/metadata.entity";
import dbConnection from "./config/config";
import express from "express";
import ResourceService from "./resource.route";
import LectureDataSource from "./config";

const resources = express.Router();

console.log(LectureDataSource.getRepository(Resource));

resources
  .route("/resources")
  .get((req, res) => {
    res.send("Get a random book");
  })
  .post(async (req, res) => {
    try {
      const resourceBody = req.body;
      const resource = new Resource();
      resource.type = resourceBody.contentType;
      resource.name = resourceBody.name;
      console.log(resource);
      await LectureDataSource.initialize();
      console.log("d");
      await LectureDataSource.getRepository(Resource).save(resource);
      await LectureDataSource.destroy();
      res.send("Add a book");
    } catch (error) {
      console.log(error);
    }
    // await
    // .createQueryBuilder()
    // .insert()
    // .into(User)
    // .values([
    //     { type: "Timber", name: "Saw" },
    // ])
    // .execute()

    res.send("Add a book");
  });

export default resources;
