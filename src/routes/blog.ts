import express from "express"
import { create, update, remove, get_all, get_one } from "../controllers/blog"
import verify_token from "../utils/verify_token"
import isadmin from "../utils/isadmin"

const route = express.Router()

route.get("/", verify_token, get_all)
route.get("/:id", verify_token, get_one)
route.post("/", verify_token, isadmin, create)
route.put("/:id", verify_token, isadmin, update)
route.delete("/:id", verify_token, isadmin, remove)

export default route