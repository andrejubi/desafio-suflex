import { IRegisterFavoriteCharacterRequestDTO } from "./RegisterFavoriteCharacterDTO";
import { ICharacterRepository } from "./../../repositories/ICharacterRepository";
import { IUserRepository } from "./../../repositories/IUserRepository";
import { Character } from "./../../entities/Character";
import { DeleteResult } from "typeorm";

export class RegisterFavoriteCharacterService {
  constructor(
    private characterRepository: ICharacterRepository,
    private userRepository: IUserRepository
  ) {}

  async execute(
    data: IRegisterFavoriteCharacterRequestDTO
  ): Promise<Character | DeleteResult> {
    const user = await this.userRepository.findById(data.user_id);

    const character = new Character();
    character.id_api = data.id_api;
    character.name = data.name;
    character.status = data.status;
    character.species = data.species;
    character.type = data.type;
    character.gender = data.gender;
    character.origin = data.origin.name + " - " + data.origin.url;
    character.location = data.location.name + " - " + data.location.url;
    character.image = data.image;
    character.episode = JSON.stringify(data.episode);
    character.url = data.url;
    character.created = data.created;
    character.user_id = data.user_id;
    character.user = user;

    return this.characterRepository.save(character);
  }
}
