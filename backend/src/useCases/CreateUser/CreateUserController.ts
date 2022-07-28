import { CreateUserService } from "./CreateUserService";
import { Request, Response } from "express";

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, password } = request.body;

    try {
      const user = await this.createUserService.execute({
        name,
        password,
      });

      return response.status(201).json({ token: user });
    } catch (e) {
      return response.status(400).send({
        message: e.message || "Unexpected error",
      });
    }
  }
}
