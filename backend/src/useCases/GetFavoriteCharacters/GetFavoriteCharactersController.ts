import { GetFavoriteCharactersService } from "./GetFavoriteCharactersService";
import { Request, Response } from "express";

export class GetFavoriteCharactersController {
  constructor(
    private getFavoriteCharactersService: GetFavoriteCharactersService
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;

    try {
      const favoriteCharacters =
        await this.getFavoriteCharactersService.execute(user_id);

      return response.status(201).json({ favoriteCharacters });
    } catch (e) {
      return response.status(400).send({
        message: e.message || "Erro inesperado",
      });
    }
  }
}
