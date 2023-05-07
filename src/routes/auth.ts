import express from "express"
import { register, login, logout, verify } from "../controllers/auth"

const route = express.Router()

route.get("/verify/:token", verify)
route.get("/logout", logout)
route.post("/register", register)
route.post("/login", login)

export default route