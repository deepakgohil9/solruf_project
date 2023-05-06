import { sequelize } from "../utils/db"
import { DataTypes } from "sequelize"

export const Blog = sequelize.define("blog", {
    blog_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    breif: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    article: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})