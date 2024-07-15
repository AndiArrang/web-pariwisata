import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import publicAPI from './routes/public-api.js'
import adminAPI from './routes/admin-api.js'
import { errorMidlleware } from './middleware/error-middleware.js'

const web = express()

web.use(cors())
web.use(express.json())
web.use(express.urlencoded({extended: true}));
web.use(bodyParser.urlencoded({ extended: true }));
web.use(bodyParser.json());

web.use(publicAPI)
web.use(adminAPI)

web.use(errorMidlleware)

web.listen(3001, () => {
    console.log(`Example app listening on port ${3001}`)
}) 