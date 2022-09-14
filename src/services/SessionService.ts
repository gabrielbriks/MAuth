import { User } from "@prisma/client";
import { UserRepository } from "../repositories/UserRepository";


type SessionRequest = {
  email: string;
  password: string;
}

class SessionService {
  async execute({email, password}: SessionRequest) {
    
    if((email == null && email != '') ) {
      return new Error('User does not exist');
    }

    const userRepository = new UserRepository();

    const user: User = await userRepository.findByEmail(email);
    
    const passwordMatch = password === user.password

    if(!passwordMatch){
      return new Error("User or Password incorrect");
    }

    let token = 'authorized'
    return token;
  }
}

export { SessionService };

