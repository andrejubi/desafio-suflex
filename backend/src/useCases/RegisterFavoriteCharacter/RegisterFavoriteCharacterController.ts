import { RegisterFavoriteCharacterService } from "./RegisterFavoriteCharacterService";
import { Request, Response } from "express";

export class RegisterFavoriteCharacterController {
  constructor(
    private registerFavoriteCharacterService: RegisterFavoriteCharacterService
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id_api,
      name,
      status,
      species,
      type,
      gender,
      origin,
      location,
      image,
      episode,
      url,
      created,
    } = request.body;

    try {
      const result = await this.registerFavoriteCharacterService.execute({
        id_api,
        name,
        status,
        species,
        type,
        gender,
        origin,
        location,
        image,
        episode,
        url,
        created: new Date(created),
        user_id: request.user_id,
      });
      return response.status(201).json({ result });
    } catch (e) {
      return response.status(400).send({
        message: e.message || "Unexpected error",
      });
    }
  }
}
