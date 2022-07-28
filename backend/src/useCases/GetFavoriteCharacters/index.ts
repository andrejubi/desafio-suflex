import { CharacterRepository } from "../../repositories/implementations/CharacterRepository";
import { UserRepository } from "./../../repositories/implementations/UserRepository";
import { GetFavoriteCharactersController } from "./GetFavoriteCharactersController";
import { GetFavoriteCharactersService } from "./GetFavoriteCharactersService";

const characterRepository = new CharacterRepository();
const userRepository = new UserRepository();

const getFavoriteCharactersService = new GetFavoriteCharactersService(
  characterRepository,
  userRepository
);

const getFavoriteCharactersController = new GetFavoriteCharactersController(
  getFavoriteCharactersService
);

export { getFavoriteCharactersService, getFavoriteCharactersController };
