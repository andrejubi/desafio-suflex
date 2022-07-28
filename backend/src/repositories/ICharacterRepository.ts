import { Character } from "../entities/Character";
import { User } from "../entities/User";
import { DeleteResult } from "typeorm";

export interface ICharacterRepository {
  getFavoriteCharacters(user: User): Promise<Character[]>;
  findCharacterById(id: number): Promise<Character>;
  save(character: Character): Promise<Character | DeleteResult>;
}
