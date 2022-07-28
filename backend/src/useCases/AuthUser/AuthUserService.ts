import { IUserRepository } from "../../repositories/IUserRepository";
import { IAuthUserRequestDTO } from "./AuthUserDTO";
import bcryptjs from "bcryptjs";

export class AuthUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: IAuthUserRequestDTO): Promise<string> {
    if (!data.name || !data.password) {
      throw new Error("Incorrect Information");
    }

    const userExists = await this.userRepository.findByName(data.name);

    if (
      !userExists ||
      !bcryptjs.compareSync(data.password, userExists.password)
    ) {
      throw new Error("User does not exist");
    }

    return this.userRepository.authUser(userExists);
  }
}
