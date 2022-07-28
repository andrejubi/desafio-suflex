import { CharacterRepository } from "./../../repositories/implementations/CharacterRepository";
import { RegisterFavoriteCharacterController } from "./RegisterFavoriteCharacterController";
import { RegisterFavoriteCharacterService } from "./RegisterFavoriteCharacterService";
import { UserRepository } from "./../../repositories/implementations/UserRepository";

const characterRepository = new CharacterRepository();
const userRepository = new UserRepository();

const registerFavoriteCharacterService = new RegisterFavoriteCharacterService(
  characterRepository,
  userRepository
);

const registerFavoriteCharacterController =
  new RegisterFavoriteCharacterController(registerFavoriteCharacterService);

export {
  registerFavoriteCharacterController,
  registerFavoriteCharacterService,
};
