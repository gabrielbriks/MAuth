import { Request, Response } from "express";
import { GetAllProductsService } from "../services/GetAllProductsService";

class GetAllProductsController {
  async handle(request: Request, response: Response){
    

    const getAllProductsService = new GetAllProductsService();

    const result = await getAllProductsService.execute();

    return response.json(result);

  }
}

export { GetAllProductsController };

