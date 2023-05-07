import express from "express"
import { register, login, logout } from "../controllers/auth"

const route = express.Router()

route.get("/logout", logout)
route.post("/register", register)
route.post("/login", login)

export default route