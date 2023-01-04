import express, { Request, Response } from 'express'
import { Product, ProductStore } from '../models/product'

const jwt = require('jsonwebtoken'); 
const store = new ProductStore()

const index = async (_req: Request, res: Response) => {
  const products = await store.index()
  res.json(products)
}

const show = async (req: Request, res: Response) => {
   const product = await store.show(req.body.id)
   res.json(product)
}

const create = async (req: Request, res: Response) => {
    try {
        const authorizationHeader = req.headers?.authorization ?? "01";
        const token = authorizationHeader.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET)
    } catch(err) {
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }
    
    try {
        const product: Product = {
            name: req.body.name,
            price: req.body.price,
            id: 0
        }
        
        const newProduct = await store.create(product)
        res.json(newProduct)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

const destroy = async (req: Request, res: Response) => {
    try {
        const authorizationHeader = req.headers?.authorization ?? "01";
        const token = authorizationHeader.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET)
    } catch(err) {
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }

    try {
        const deleted = await store.delete(req.body.id)
        res.json(deleted)
    } catch (error) {
        res.status(400)
        res.json({ error })
    }
}



const productRoutes = (app: express.Application) => {
  app.get('/products', index)
  app.get('/products/:id', show)
  app.post('/products', create)
  app.delete('/products', destroy)
}

export default productRoutes