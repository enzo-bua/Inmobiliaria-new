import { Router } from 'express';
import { UserController } from '../Controllers/user.controllers';
const path = '/admin';
const user = Router();
const controllers = UserController();

user.post(`${path}`, controllers.crearUserAdmin);
user.post(`${path}/login`, controllers.LoginUserAdmin);

export default user;
