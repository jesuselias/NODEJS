import { Router } from 'express'
import { token } from 'morgan';

const router: Router = Router();

import {TokenValidation} from '../libs/verifyToken'

import { signup, signin, profile, testing } from '../controllers/auth.Controller'

router.post('/signup', signup)

router.post('/signin', signin)

router.get('/profile', TokenValidation, profile)

router.get('/testing', TokenValidation, testing);

export default router;