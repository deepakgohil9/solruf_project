import { title } from "process"
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
        type: DataTypes.TEXT,
        allowNull: false,
    },
    breif: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    article: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    indexes: [
        {
            type: "FULLTEXT",
            name: "text_search",
            fields: [
                "title",
                "article"
            ]
        }
    ]
})