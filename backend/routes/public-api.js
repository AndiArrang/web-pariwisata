import express from 'express'
import paketController from '../controllers/paket-controller.js'
import adminController from '../controllers/admin-controller.js';


const publicAPI = express.Router()

publicAPI.post('/api/admin/login',adminController.login)

publicAPI.get('/api/paket',paketController.get)
publicAPI.post('/api/paket/lokasi',paketController.getByLokasi)
publicAPI.post('/api/paket/search',paketController.getBySearch)

export default publicAPI
