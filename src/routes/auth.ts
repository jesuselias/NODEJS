import { Router } from 'express'

const router: Router = Router();

import { signup, signin, profile } from '../controllers/auth.Controller'

router.post('/signup', signup)

router.post('/signin', signin)

router.get('/profile', profile)

export default router;