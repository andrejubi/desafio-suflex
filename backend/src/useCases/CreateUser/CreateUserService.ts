import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "./../../entities/User";
import bcryptjs from "bcryptjs";

export class CreateUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ICreateUserRequestDTO): Promise<string> {
    if (!data.name || !data.password) {
      throw new Error("Incorrect information");
    }

    const userAlreadyExists = await this.userRepository.findByName(data.name);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = new User();
    user.name = data.name;
    user.password = bcryptjs.hashSync(data.password, 10);

    await this.userRepository.save(user);

    return this.userRepository.authUser(user);
  }
}
