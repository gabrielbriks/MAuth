import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

type BodyType = {
  name: string;
  email: string;
  password: string;
}

class CreateUserController {
  
  async handle(request: Request, response: Response) {
    const { name, email, password }: BodyType = request.body;

    const createUserService = new CreateUserService();

    const result = await createUserService.execute({name, email, password});

    return response.json(result);

  }
}

export { CreateUserController };

