import { Resource } from "./entities/Resource.entity";
import { Metadata } from "./entities/Metadata.entity";

import { Link } from "./entities/Link.entity";
import "reflect-metadata";
import { DataSource, MetadataAlreadyExistsError } from "typeorm";

const LectureDataSource = new DataSource({
  type: "mysql",
  host: "mysql",
  port: 3306,
  username: "root",
  password: "1234",
  database: "lecture",
  charset: "utf8mb4",
  synchronize: true,
  entities: [Resource, Link, Metadata],
});

export default LectureDataSource;
