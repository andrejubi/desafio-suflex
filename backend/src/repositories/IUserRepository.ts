import { User } from "../entities/User";

export interface IUserRepository {
  authUser(user: User): Promise<string>;
  findById(id: number): Promise<User>;
  findByName(name: string): Promise<User>;
  save(user: User): Promise<void>;
}
