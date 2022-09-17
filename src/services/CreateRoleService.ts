import { Role } from "@prisma/client";
import { RoleRepository } from "../repositories/RoleRepository";

type RoleRequestType = {
  name: string;
  description: string;
}

class CreateRoleService {
 
  async execute({name, description}: RoleRequestType): Promise <Role | Error> {

    const repo = new RoleRepository();

    if(await repo.findOneByName(name)){
      return new Error('Role alredy exist');
    }

    const result: Role = await repo.save(name, description);


    return result;

  }

}

export { CreateRoleService };

