import { Request, Response } from "express";
import { CreateUserAccessControlListService } from "../services/CreateUserAccessControlListService";

class CreateUserAccessController {
  
  async handle(request: Request, response: Response) {
    const {user_id, permissions, roles} = request.body;

    const createUserACLService = new CreateUserAccessControlListService();

    const result = await createUserACLService.execute({ userId: user_id, permissions, roles});

    if(result instanceof Error){
      return response.status(400).json(result.message);
    }
    
    return response.json(result);
  }
}

export { CreateUserAccessController };

