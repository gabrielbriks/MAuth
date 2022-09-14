import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";


type BodyType = {
  name: string;
  price: number;
}

class CreateProductController {
  async handle(request: Request, response: Response){
    const { name, price }: BodyType = request.body;

    const createProductService = new CreateProductService();

    const result = await createProductService.execute({name, price});

    if(result instanceof Error){
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}

export { CreateProductController };

