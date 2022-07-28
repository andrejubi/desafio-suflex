import { IRegisterFavoriteCharacterRequestDTO } from "./../RegisterFavoriteCharacter/RegisterFavoriteCharacterDTO";
import { getFavoriteCharactersResource } from "../../Resources/FavoriteCharacters";
import { ICharacterRepository } from "../../repositories/ICharacterRepository";
import { IUserRepository } from "./../../repositories/IUserRepository";

export class GetFavoriteCharactersService {
  constructor(
    private characterRepository: ICharacterRepository,
    private userRepository: IUserRepository
  ) {}

  async execute(
    userId: number
  ): Promise<IRegisterFavoriteCharacterRequestDTO[]> {
    const user = await this.userRepository.findById(userId);
    const characters = await this.characterRepository.getFavoriteCharacters(
      user
    );
    return getFavoriteCharactersResource(characters);
  }
}
