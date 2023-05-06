import { Request, Response, NextFunction } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../models/user"

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let salt = await bcrypt.genSalt(10)
        let email = req.body.email
        let username = req.body.username
        let password = await bcrypt.hash(req.body.password, salt)
        await User.create({
            email: email,
            username: username,
            password: password
        })
        res.send({ status: "user created!", data: { email: email, username: username } })
    } catch (error) {
        next({ error: error })
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let email = req.body.email
        let password = req.body.password
        let data = await User.findOne({ where: { email: email } })
        if (!data) {
            next({ status_code: 404, error: "no user found" })
            return
        }
        let isvalid = await bcrypt.compare(password, data.dataValues.password)
        if (!isvalid) {
            next({ status_code: 400, error: "wrong password" })
            return
        }
        let payload = JSON.stringify({ username: data.dataValues.username, email: data.dataValues.email })
        let token = jwt.sign(payload, process.env.JWT as string)
        res.cookie("access_token", token, { httpOnly: true }).send({ status: "login sucessful!", data: { token: token } })
    } catch (error) {
        next(error)
    }
}

