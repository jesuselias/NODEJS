import express, { Application } from 'express'
import morgan from 'morgan'


import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from './swagger.json'

const app: Application = express();

import authRoutes from './routes/auth'

// setting

app.set('port', 4000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes

app.use('/api/auth', authRoutes)

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

export default app;