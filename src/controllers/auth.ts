import { Request, Response, NextFunction } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../models/user"
import { send_mail } from "../utils/send_mail"

let base_url = process.env.BASE_URL as string

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let salt = await bcrypt.genSalt(10)
        let email = req.body.email
        let username = req.body.username
        let isadmin = req.body.isadmin

        let password = await bcrypt.hash(req.body.password, salt)
        let user = await User.create({
            email: email,
            username: username,
            password: password,
            verified: false,
            isadmin: isadmin
        })
        let token = jwt.sign(JSON.stringify({ user_id: user.dataValues.user_id }), process.env.JWT as string)
        await send_mail(email, base_url + token)
        res.send({ status: "user created!", data: { email: email, username: username, isadmin: isadmin } })

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

        if (!data.dataValues.verified) {
            next({ status_code: 400, error: "please verify email" })
            return
        }

        let isvalid = await bcrypt.compare(password, data.dataValues.password)
        if (!isvalid) {
            next({ status_code: 400, error: "wrong password" })
            return
        }

        let payload = JSON.stringify({ username: data.dataValues.username, email: data.dataValues.email, isadmin: data.dataValues.isadmin })
        let token = jwt.sign(payload, process.env.JWT as string)
        res.cookie("access_token", token, { httpOnly: true }).send({ status: "login sucessful!", data: { token: token } })

    } catch (error) {
        next(error)
    }
}

export const verify = (req: Request, res: Response, next: NextFunction) => {
    jwt.verify(req.params.token, process.env.JWT as string, async (err: any, user_details: any) => {
        if (err) {
            next({ error: "invalid token" })
            return
        }
        try {
            await User.update({ verified: true }, { where: { user_id: user_details.user_id } })
            res.send({ status: "verified sucessful!" })
        } catch (error) {
            next(error)
        }
    })
}

export const logout = (req: Request, res: Response, next: NextFunction) => {
    res.clearCookie("access_token")
    res.send({ status: "logout sucessful!" })
}

