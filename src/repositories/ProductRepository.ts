import { prisma } from "../lib/prisma";

 class ProductRepository {
  async save(name: string, price: number){
    const result = await prisma.product.create({
      data: {
        name,
        price
      }
    })
    .then((data: any) =>  data)
    .catch((error: any) => error);
    
    return result;
  }

  async listAll(){
    const result = await prisma.product.findMany({})
    .then((data: any) =>  data)
    .catch((error: any) => error);

    return result;
  }
}
export { ProductRepository };

