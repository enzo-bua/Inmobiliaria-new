import { NextFunction, Request, Response } from 'express';
import { compare, hash } from 'bcrypt';
import { User } from '../Entities/User';
import { sign } from 'jsonwebtoken';
import { UserService } from '../Services/User.service';
import { ILike } from 'typeorm';
import { validateUserAdmin } from '../Schemas/userSchema';

export const UserController = () => {
  const userService = UserService();

  const crearUserAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = await validateUserAdmin(req.body);

      if (!result.success) {
        return res
          .status(400)
          .json({ error: JSON.parse(result.error.message) });
      }

      const { username, password } = result.data;

      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
        return res
          .status(409)
          .json({ error: 'El nombre de usuario ya está en uso' });
      }

      const hashedPassword = await hash(password, 10);

      const userAdmin = new User();
      userAdmin.username = username;
      userAdmin.password = hashedPassword;

      await userAdmin.save();

      const accessToken = sign({ id: userAdmin.id }, 'Secret-key');

      return res.status(200).json({ accessToken, user: userAdmin.username });
    } catch (error: any) {
      if (
        error.name === 'QueryFailedError' &&
        error.message.includes('llave duplicada viola restricción de unicidad')
      ) {
        return res
          .status(409)
          .json({ error: 'El nombre de usuario ya está en uso' });
      }
      next(error);
    }
  };

  const LoginUserAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { username, password } = req.body;

    const mailExists = await userService.existEmail(username);

    if (!mailExists) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    try {
      const userExist = await User.findOne({
        where: {
          username: ILike(`${username}`),
        },
      });

      if (!userExist) {
        return res.status(409).json({ message: 'User not found' });
      }

      const passwordMatch = await compare(password, userExist.password);

      if (!passwordMatch) {
        return res.status(409).json({ message: 'User not found' });
      }

      const accessToken = sign({ id: userExist.id }, 'Secret_key');

      const user = {
        accessToken,
        name: userExist.username,
      };

      return res.status(200).json({ user, success: true });
    } catch (error: any) {
      next(error);
    }
  };

  return { crearUserAdmin, LoginUserAdmin };
};
