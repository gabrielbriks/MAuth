import { ProductRepository } from "../repositories/ProductRepository";

class GetAllProductsService {
  async execute() {

    const productRepository = new ProductRepository();

    const result = await productRepository.listAll();

    return result;
  }
}

export { GetAllProductsService };
