import { Request, Response, NextFunction } from "express"
import { Blog } from "../models/blog"
import { query } from "../interfaces/query.interface"
import { Sequelize } from "sequelize"

export const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let data = await Blog.create({
            title: req.body.title,
            breif: req.body.breif,
            article: req.body.article
        })

        res.send({ status: "blog created!", data: data })
    } catch (error) {
        next({ error: error })
    }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let data = await Blog.update(req.body, { where: { blog_id: req.params.id } })
        res.send({ status: "blog updated!", data: data })
    } catch (error) {
        next({ error: error })
    }
}

export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let data = await Blog.destroy({ where: { blog_id: req.params.id } })
        res.send({ status: "blog deleted!", data: data })
    } catch (error) {
        next({ error: error })
    }
}

export const getall = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let serach: query = {}
        if (req.query.q) {
            serach.where = Sequelize.literal(`MATCH (title,article) AGAINST ("${req.query.q}")`)
        }
        let data = await Blog.findAll(serach)
        res.send(data)
    } catch (error) {
        next({ error: error })
    }
}

export const getone = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let data = await Blog.findOne({ where: { blog_id: req.params.id } })
        res.send(data)
    } catch (error) {
        next({ error: error })
    }
}
