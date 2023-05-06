import express, { Request, Response, NextFunction } from "express"
import helmet from "helmet"
import cors from "cors"
import cookie_parser from "cookie-parser"
import dotenv from "dotenv"
import { error_inter } from "./interfaces/error.interface"
dotenv.config()

import auth_route from "./routes/auth"
import { sequelize } from "./utils/db"


const PORT = parseInt(process.env.PORT as string) || 3000
const app = express()

// middlewares
app.use(helmet())
app.use(cors())
app.use(cookie_parser())
app.use(express.json())

app.use("/auth", auth_route)

app.use((err: error_inter, req: Request, res: Response, next: NextFunction) => {
    let status_code = err.status_code || 400
    res.status(status_code).send({ status: "error occured", error: err })
})

app.listen(PORT, async () => {
    console.log(`server started on port ${PORT}`)
    await sequelize.sync()
    console.log("database synced")
})
