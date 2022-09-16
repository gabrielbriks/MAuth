import { User } from "@prisma/client";
import { PermissionRepository } from "../repositories/PermissionRepository";
import { RoleRepository } from "../repositories/RoleRepository";
import { UserRepository } from "../repositories/UserRepository";

type UserACLRequestType = {
  userId: string;
  roles: string[];
  permissions:string[];
}

class CreateUserAccessControlListService {
  async execute({userId, permissions, roles}): Promise<User | Error> {
    
    const repoUser = new UserRepository();

    console.log('Service:::' + userId +'....'+ permissions +'....'+ roles);

    const user = await repoUser.findById(userId);

    if(!user){
      return new Error('User not found');
    }

    const repoPermission = new PermissionRepository();
    const repoRoles = new RoleRepository();

    const permissionsExists = await repoPermission.findByIds(permissions);

    const rolesExists = await repoRoles.findByIds(roles);

    // user.UserPermissions = permissionsExists;
    // user.UserRoles = rolesExists;

    const result = await repoUser.updateUserPermission(user,userId, permissionsExists, rolesExists);
    return result;
  }
}

export { CreateUserAccessControlListService };

