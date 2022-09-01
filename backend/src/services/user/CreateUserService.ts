import prismaClient from "../../prisma";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    // verify if user entered an email
    if(!email) {
      throw new Error("Necessário informar um email");
    };

    // verify if email is already registered
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      }
    });

    if(userAlreadyExists) {
      throw new Error("Email já está registrado");
    };

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      }
    });

    return user;
  }
}

export { CreateUserService };
