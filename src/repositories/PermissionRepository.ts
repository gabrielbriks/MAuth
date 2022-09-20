import { prisma } from "../lib/prisma";

class PermissionRepository {
  async save(name: string, description: string) {
    const result = await prisma.permission.create({
      data: {
        name,
        description,
      }
    })
    .then((data: any) =>  data)
    .catch((error: any) => error);

    return result;
  }

  async findOne(name: string) {
    const result = await prisma.permission.findFirst({
      where: {
        name
      }
    })
    .then((data: any) =>  data)
    .catch((error: any) => error);
    
    return result;
  }

  async listAll() {
    const result = await prisma.permission.findMany()
    .then((data: any) =>  data)
    .catch((error: any) => error);
    
    return result;
  }

  async findByIds(permissionsIds: string[]) {
    const result = await prisma.permission.findMany({
      where: {
        id: {
          in: permissionsIds
        }
      }
    })
    .then((data: any) =>  data)
    .catch((error: any) => error);
    
    return result;
  }
}

export { PermissionRepository };

