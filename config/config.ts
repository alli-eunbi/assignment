import { DataSource } from "typeorm";
const dbConnection = new DataSource({
  type: "mysql",
  host: "mysql",
  port: 3306,
  username: "root",
  password: "1234",
  database: "lecture",
  charset: "utf8mb4",
  synchronize: true,
});

export default dbConnection;
