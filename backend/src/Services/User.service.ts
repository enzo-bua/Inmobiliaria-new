import { ILike } from 'typeorm';
import { User } from '../Entities/User';

export const UserService = () => {
  const existEmail = async (username: string) => {
    const user = await User.find({
      where: {
        username: ILike(`${username}`),
      },
    });

    return user[0] ? true : false;
  };

  const getUserID = async (id: number) => {
    const user = await User.findOne({
      where: {
        id: String(id),
      },
      select: ['username'],
    });

    if (!user) {
      throw new Error('User not found');
    }
    return user;
  };

  return { existEmail, getUserID };
};
