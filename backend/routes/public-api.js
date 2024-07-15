import express from 'express'
import paketController from '../controllers/paket-controller.js'

const publicAPI = express.Router()

publicAPI.get('/api/paket',paketController.get)

export default publicAPI
