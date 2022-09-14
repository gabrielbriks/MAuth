import { Product } from "@prisma/client";
import { ProductRepository } from "../repositories/ProductRepository";


type ProductRequestType = {
  name: string;
  price: number;
}

export class CreateProductService {
  async execute({name, price}: ProductRequestType) : Promise<Error  | Product> {
    
    if(name == null){
      return new Error("Product name cannot be null");
    }

    if(price == null || price <=0){
      return new Error("Product price cannot be null or zero");
    }

    const createProductService = new ProductRepository();

    const product = await createProductService.save(name, price);

    return product;
  }
}