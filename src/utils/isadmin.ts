import { Request, Response, NextFunction } from "express"

const isadmin = (req: Request, res: Response, next: NextFunction) => {
    if (req.user_details.isadmin) {
        next()
    }
    else {
        next({ error: "you don't have permission to perform this request" })
    }
}

export default isadmin