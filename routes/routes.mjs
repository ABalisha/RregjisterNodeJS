import { Router } from "express";
import {mainController} from '../controller.mjs'
export const router = Router()
router.post('/',mainController)





