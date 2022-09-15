import { Request, Response } from "express";
import { CreateRoleService } from "../services/CreateRoleService";

type BodyType = {
  name: string;
  description: string;
}

class CreateRoleController {
  async handle(request: Request, response: Response) {
    
    const {name, description}: BodyType = request.body;

    const service = new CreateRoleService()

    const result = await service.execute({name, description});

    if(result instanceof Error)
      return response.status(400).json(result.message)


    return response.json(result);
  }
}

export { CreateRoleController };

