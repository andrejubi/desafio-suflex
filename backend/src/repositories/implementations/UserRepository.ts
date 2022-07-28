import { IUserRepository } from "../IUserRepository";
import AppDataSource from "../../data-source";
import { User } from "../../entities/User";
import jwt from "jsonwebtoken";

export class UserRepository implements IUserRepository {
  constructor(private appDataSource = AppDataSource.getRepository(User)) {}
  async authUser(user: User): Promise<string> {
    return jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: "1d" });
  }
  async findById(id: number): Promise<User> {
    return this.appDataSource.findOneBy({
      id,
    });
  }
  async findByName(name: string): Promise<User> {
    return this.appDataSource.findOneBy({
      name,
    });
  }
  async save(user: User): Promise<void> {
    await this.appDataSource.save(user);
  }
}
