import { Resource } from "./entities/resource.entity";
import { Metadata } from "./entities/metadata.entity";
import dbConnection from "./config/config";
import express from "express";

const resources = express.Router();

const resourceRepository = dbConnection.getRepository(Resource);

resources
  .route("/resources")
  .get((req, res) => {
    res.send("Get a random book");
  })
  .post(async (req, res) => {
    const resourceBody = req.body;
    console.log(resources);
    const resource = new Resource();
    resource.name = resourceBody.name;
    resource.type = resourceBody.content_type;
    await resourceRepository.save(resource);
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
