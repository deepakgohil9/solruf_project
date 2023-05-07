import { Sequelize } from "sequelize"

let database: string = process.env.DATABASE as string
let username: string = process.env.DB_USER as string
let password: string = process.env.DB_PASSWORD as string
let host: string = process.env.DB_HOST as string
let port: number = parseInt(process.env.DB_PORT as string)

console.log(host)
console.log(port)
export const sequelize = new Sequelize(database, username, password, {
    dialect: 'mysql',
    host: host,
    port: port,
    logging: false
})