import { User } from "@prisma/client";
import { UserRepository } from "../repositories/UserRepository";


type UserRequest = {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({name, email, password}: UserRequest) : Promise<Error  | User> {
    
    if((name == null && name != '') || (email == null && email != '') || (password == null && password!= '')) {
      return new Error('All fields are required');
    }
    
    const userRepository = new UserRepository();

    const result = await userRepository.save(name, email, password);

    return result;
  }
}

export { CreateUserService };

