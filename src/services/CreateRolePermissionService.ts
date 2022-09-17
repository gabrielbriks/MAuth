import { Permission, Role } from "@prisma/client";
import { PermissionRepository } from "../repositories/PermissionRepository";
import { RoleRepository } from "../repositories/RoleRepository";

type RolePermissionRequestType = {
  roleId: string;
  permissions: string[];
}

class CreateRolePermissionService {
 
  async execute({roleId, permissions}: RolePermissionRequestType): Promise <{ Role: Role | null; Permission: Permission | null; }[] | Error> {

    const repoRole = new RoleRepository();
    const repoPermission = new PermissionRepository();

    if(!await repoRole.findOneById(roleId)){
      return new Error('Permission alredy exist');
    }

    const permissionsExists = await repoPermission.findByIds(permissions);
    
    if(!permissionsExists){
      return new Error('Permission not exist');
    }

    const result = await repoRole.createRolePermission(roleId, permissionsExists);

    return result;

  }

}

export { CreateRolePermissionService };

