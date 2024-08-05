import { DataSource } from 'typeorm';
import { User } from './Entities/User';
import { Property } from './Entities/Property';
import { Image } from './Entities/Image';
import * as dotenv from 'dotenv';
dotenv.config();
//conexion de base de datos
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Property, Image],
  logging: true,
  synchronize: true,
});
