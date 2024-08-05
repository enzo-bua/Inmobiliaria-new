import { z } from 'zod';
import { UserAdminDto } from '../Dtos/UserDto';

const userAdminSchema = z.object({
  username: z.string().min(2, {
    message: 'User name must be at least 2 characters long',
  }),
  password: z.string().min(6, {
    message: 'User password must be at least 6 characters long',
  }),
});

export async function validateUserAdmin(object: UserAdminDto) {
  return userAdminSchema.safeParseAsync(object);
}

export async function validatePartialUserAdmin(object: UserAdminDto) {
  return userAdminSchema.partial().safeParseAsync(object);
}
