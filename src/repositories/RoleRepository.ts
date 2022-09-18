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

  async createRolePermission(roleId: string, permissions: {id: string}[] ) {
   try {
      let result = prisma.$transaction(
        permissions.map(item => 
          prisma.permissionRole.upsert({
            select: {
              Role: true,
              Permission: true
            },
            where: {
              role_id_permission_id: {
                role_id: roleId,
                permission_id: item.id
                
              }
            },
            update: {},
            create: {
              permission_id: item.id,
              role_id: roleId
            }

          })  
        )
      ).then(data => data);

      return result;

   } catch (error) {
    throw new Error(`${error}`);
   }

  }

  async findOneByName(name: string) {
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

  
  async findByIds(rolesIds: string[]) {
    const result = await prisma.role.findMany({
      where: {
        id: {
          in: rolesIds
        }
      }
    })
    .then(data => data)
    .catch(error => error);
    
    return result;
  }

  async findOneById(roleId: string) {
    const result = await prisma.role.findFirst({
      where: {
        id: roleId
      }
    })
    .then(data => data)
    .catch(error => error);
    
    return result;
  }
 
}
export { RoleRepository };

