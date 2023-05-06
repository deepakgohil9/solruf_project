import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"

declare global {
    namespace Express {
        interface Request {
            user_details: any
        }
    }
}
const verify_token = (req: Request, res: Response, next: NextFunction) => {
    let token = req.cookies.access_token

    if (!token) {
        next({ error: "no token found, please login" })
        return
    }

    jwt.verify(token, process.env.JWT as string, (err: any, user_details: any) => {
        if (err) {
            next({ error: "invalid token" })
            return
        }
        req.user_details = user_details
        next()
    })
}

export default verify_token