import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1234",
  database: "lecture",
  charset: "utf8mb4",
});

export default AppDataSource;
