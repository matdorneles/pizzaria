import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AuthRequest {
  email: string;
  password: string;
};

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    // Verify if email exists
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if(!user) {
      throw new Error("Incorrect user/password");
    }

    // Verify is password is correct
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error("Incorrect user/password");
    }

    return { ok: true };
  };    
};

export { AuthUserService };