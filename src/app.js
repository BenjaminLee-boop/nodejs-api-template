import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
// import routes from './api/routes'

const app = express();
app.use(morgan('dev'));
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(cors());
// app.use('/api/v1/', routes)

export default app;
