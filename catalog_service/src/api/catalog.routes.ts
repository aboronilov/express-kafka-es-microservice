import express, { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const router = express.Router()

// endpoints
router.post("/product", async(req: Request, res: Response, next: NextFunction) => {
    return res.status(StatusCodes.CREATED).json({})
})

export default router;