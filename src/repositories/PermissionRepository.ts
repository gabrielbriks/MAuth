import { prisma } from "../lib/prisma";

class PermissionRepository {
  async save(name: string, description: string) {
    const result = await prisma.permission.create({
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
    const result = await prisma.permission.findFirst({
      where: {
        name
      }
    })
    .then(data => data)
    .catch(error => error);
    
    return result;
  }

  async listAll() {
    const result = await prisma.permission.findMany()
    .then(data => data)
    .catch(error => error);
    
    return result;
  }
}

export { PermissionRepository };
