import { ICharacterRepository } from "./../ICharacterRepository";
import { Character } from "./../../entities/Character";
import AppDataSource from "../../data-source";
import { User } from "../../entities/User";
import { DeleteResult } from "typeorm";

export class CharacterRepository implements ICharacterRepository {
  constructor(private appDataSource = AppDataSource.getRepository(Character)) {}
  async getFavoriteCharacters(user: User): Promise<Character[]> {
    return this.appDataSource.findBy({
      user_id: user.id,
    });
  }
  async findCharacterById(id: number): Promise<Character> {
    return this.appDataSource.findOneBy({
      id,
    });
  }
  async save(character: Character): Promise<Character | DeleteResult> {
    const characterFounded = await this.appDataSource.findOneBy({
      id_api: character.id_api,
      user_id: character.user_id,
    });

    if (characterFounded) {
      return this.appDataSource.delete(characterFounded.id);
    }
    return this.appDataSource.save(character);
  }
}
