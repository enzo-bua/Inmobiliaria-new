import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import user from './Routes/router.user';
import property from './Routes/router.property';

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(user);
app.use(property);
export default app;
