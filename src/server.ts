import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app: express.Application = express()
const address: string = "0.0.0.0:3000"

const corsOptions = {
    origin: 'http:/someotherdomain.com',
    optionsSucessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.get('/test-cors', cors(), function (req, res, next) {
    res.json({msg: 'This is CORS enabled with a middle ware'})
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
