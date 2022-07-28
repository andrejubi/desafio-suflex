import express, { Express } from "express";
import routes from "./routes";
import "reflect-metadata";
import cors from "cors";
import "dotenv/config";
import "./data-source";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

export { app };
