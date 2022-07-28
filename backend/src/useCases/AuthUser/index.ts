import { UserRepository } from "./../../repositories/implementations/UserRepository";
import { AuthUserController } from "./AuthUserController";
import { AuthUserService } from "./AuthUserService";

const userRepository = new UserRepository();
const authUserService = new AuthUserService(userRepository);
const authUserController = new AuthUserController(authUserService);

export { authUserController, authUserService };
