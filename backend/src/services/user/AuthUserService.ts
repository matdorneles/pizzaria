import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

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

    // If all OK, generate user token
    const token = sign(
      {
        name: user.name,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "30d"
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token
    };
  };    
};

export { AuthUserService };