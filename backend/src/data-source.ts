import { Character } from "./entities/Character";
import { User } from "./entities/User";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_CONTAINER_HOST,
  port: parseInt(process.env.DB_CONTAINER_PORT, 10),
  username: process.env.DB_CONTAINER_USER,
  password: process.env.DB_CONTAINER_ROOT_PASSWORD,
  database: process.env.DB_CONTAINER_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Character],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource;
