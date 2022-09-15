import { Permission } from "@prisma/client";
import { PermissionRepository } from "../repositories/PermissionRepository";

type PermissionRequestType = {
  name: string;
  description: string;
}

class CreatePermissionService {
 
  async execute({name, description}: PermissionRequestType): Promise <Permission | Error> {

    const repo = new PermissionRepository();

    if(await repo.findOne(name)){
      return new Error('Permission alredy exist');
    }

    const result: Permission = await repo.save(name, description);


    return result;

  }

}

export { CreatePermissionService };

