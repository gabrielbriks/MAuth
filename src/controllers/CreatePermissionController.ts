import { Request, Response } from "express";
import { CreatePermissionService } from "../services/CreatePermissionService";

type BodyType = {
  name: string;
  description: string;
}

class CreatePermissionController {
  async handle(request: Request, response: Response) {
    
    const {name, description}: BodyType = request.body;

    const service = new CreatePermissionService()

    const result = await service.execute({name, description});

    if(result instanceof Error)
      return response.status(400).json(result.message);

    return response.json(result);
  }
}

export { CreatePermissionController };

