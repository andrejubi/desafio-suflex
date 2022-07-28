import { AuthUserService } from "./AuthUserService";
import { Request, Response } from "express";

export class AuthUserController {
  constructor(private authUserService: AuthUserService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, password } = request.body;

    try {
      const user = await this.authUserService.execute({
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
