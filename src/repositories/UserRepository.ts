import { prisma } from "../lib/prisma";


type UserSaveType = {
  id: string;
  name: string;
  email: string;
  password: string;
  UserPermission: string[];
  UserRoles: string[];
}
 class UserRepository {

  // async createACL(user: UserSaveType){

    async updateUserPermission(user: any, userID: string, permission: { id: string }[], role: { id: string }[]) {
      try {
       await prisma.$transaction (
          permission.map((itemPermission) =>
            prisma.userPermission.upsert({
              where: { 
                user_id_permission_id: {
                  permission_id: itemPermission.id,
                  user_id: userID,
                }
              },
              create: { user_id: userID, permission_id: itemPermission.id },
              update: { },
            })
          )
        );

       await prisma.$transaction (
          role.map((itemRole) =>
            prisma.userRoles.upsert({
              where: { 
                user_id_role_id: {
                  role_id: itemRole.id,
                  user_id: userID
                  
                }
              },
              create: { user_id: userID, role_id: itemRole.id },
              update: {},
            })
          )
        );

      

      } catch (error) {
        throw new Error(`${error}`);
      }

      user.role = role;
      user.permission = permission;

      return user;
    }


  async save(name: string, email: string, password: string){
    const result = await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    })
    .then((data: any) =>  data)
    .catch((error: any) => error);

    return result;
  }

  async findByEmail(email: string) {
    const result = await prisma.user.findFirst({
      where: {
        email
      },
    })
    .then((data: any) =>  data)
    .catch((error: any) => error);
    
    return result;
  }

  //Retorna os dados do usuário
  async findOne(userId: string)  {
    const result = await prisma.user.findFirst({
      where: {
        id: userId
      },
      
    })
    .then((data: any) =>  data)
    .catch((error: any) => error);
    
    return result;
  }

  ///Retorna dados do usuário e suas Roles e Permissions
  async findById(userId: string)  {
    const result = await prisma.user.findFirst({
      where: {
        id: userId
      },
      include: {
        UserPermission: {
          select: {
            Permission: {
              select:{
                id:true,
                name: true,
                description: true
              }
            }
          }
        },
        UserRoles: {
          select:{
            Role:{
              select: {
                id:true,
                name:true,
                description: true,
                PermissionRole: {
                  select: {
                    Permission: {
                      select: {
                        id: true,
                        name: true,
                        description: true
                      }
                    }
                  }
                }
              }
            }
          }
        },        
      }
    })
    .then((data: any) =>  data)
    .catch((error: any) => error);
    
    return result;
  }


 
}
export { UserRepository };

