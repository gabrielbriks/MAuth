import { prisma } from "../lib/prisma";

 class UserRepository {
  async save(name: string, email: string, password: string){
    const result = await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    })
    .then(data =>  data)
    .catch(error => error);

    return result;
  }

  async findByEmail(email: string) {
    const result = await prisma.user.findFirst({
      where: {
        email
      },
    })
    .then(data => data)
    .catch(error => error);
    
    return result;
  }

 
}
export { UserRepository };

