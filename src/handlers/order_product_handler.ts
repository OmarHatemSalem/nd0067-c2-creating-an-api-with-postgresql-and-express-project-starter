import express, { Request, Response } from 'express'
import { OrderProduct, OrderProductStore } from '../models/order_product'

const store = new OrderProductStore()

const index = async (_req: Request, res: Response) => {
  const orderProducts = await store.index()
  res.json(orderProducts)
}

const show = async (req: Request, res: Response) => {
   const orderProduct = await store.show(req.body.id)
   res.json(orderProduct)
}

const create = async (req: Request, res: Response) => {
    try {
        const orderProduct: OrderProduct = {
            productID: req.body.productID,
            qunatity: req.body.qunatity,
            orderID: req.body.orderID
        }

        const newOrderProduct = await store.create(orderProduct)
        res.json(newOrderProduct)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

const destroy = async (req: Request, res: Response) => {
    const deleted = await store.delete(req.body.id)
    res.json(deleted)
}

const orderProductRoutes = (app: express.Application) => {
  app.get('/orderProducts', index)
  app.get('/orderProducts/:id', show)
  app.post('/orderProducts', create)
  app.delete('/orderProducts', destroy)
}

export default orderProductRoutes