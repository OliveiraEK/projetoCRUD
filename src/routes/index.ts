import { Router } from "express";
import { Request, Response } from "express";
import * as userController from '../controllers/userController'

const router = Router()

router.get('/',(req:Request, res:Response) =>{
    res.send("TESTE!!")
})

router.get('/usuarios', userController.index)

export default router
