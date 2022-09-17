import { Request, Response } from "express";
import { CreateRolePermissionService } from "../services/CreateRolePermissionService";



class CreateRolePermissionController {
  async handle(request: Request, response: Response) {
    const {roleId} = request.params;
    const { permissions } = request.body;
    
    const service = new CreateRolePermissionService();

    const result = await service.execute({ roleId, permissions });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result);
  }
}

export { CreateRolePermissionController };

