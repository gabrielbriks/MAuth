import { prisma } from "../lib/prisma";

 class RoleRepository {
  async save(name: string, description: string) {
    const result = await prisma.role.create({
      data: {
        name,
        description,
      }
    })
    .then(data =>  data)
    .catch(error => error);

    return result;
  }

  async findOne(name: string) {
    const result = await prisma.role.findFirst({
      where: {
        name
      }
    })
    .then(data => data)
    .catch(error => error);
    
    return result;
  }

  async listAll() {
    const result = await prisma.role.findMany()
    .then(data => data)
    .catch(error => error);
    
    return result;
  }

 
}
export { RoleRepository };

