import { registerFavoriteCharacterController } from "./useCases/RegisterFavoriteCharacter";
import { getFavoriteCharactersController } from "./useCases/GetFavoriteCharacters";
import { createUserController } from "./useCases/CreateUser";
import authMiddleware from "./middlewares/authMiddleware";
import { authUserController } from "./useCases/AuthUser";
import { Router } from "express";

const routes = Router();

routes.post("/user", (request, response) => {
  createUserController.handle(request, response);
});

routes.post("/login", (request, response) => {
  authUserController.handle(request, response);
});

routes.post("/favorite-character", authMiddleware, (request, response) => {
  registerFavoriteCharacterController.handle(request, response);
});

routes.get("/favorite-character", authMiddleware, (request, response) => {
  getFavoriteCharactersController.handle(request, response);
});

export default routes;
