import express from 'express'
import { userCredits, clerkWebhooks,  } from '../controllers/UserController.js'
import authUser from '../middlewares/auth.js'
import upload from '../middlewares/multer.js'
import { removeBgImage } from '../controllers/imageController.js'

const userRouter = express.Router()

userRouter.post('/webhooks', clerkWebhooks)
userRouter.get('/credits', authUser, userCredits)
const imageRouter = express.Router();
imageRouter.post('remove-bg',upload.single('image'),authUser,removeBgImage);

export default imageRouter;