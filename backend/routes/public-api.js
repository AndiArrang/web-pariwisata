import express from 'express'
import paketController from '../controllers/paket-controller.js'
import adminController from '../controllers/admin-controller.js';
import penginapanController from '../controllers/penginapan-controller.js';
import paketPenginapanController from '../controllers/paketPenginapan-controller.js';


const publicAPI = express.Router()

publicAPI.post('/api/admin/login',adminController.login)

// API paket
publicAPI.get('/api/paket',paketController.get)
publicAPI.post('/api/paket/lokasi',paketController.getByLokasi)
publicAPI.post('/api/paket/search',paketController.getBySearch)

// API penginapan
publicAPI.get('/api/penginapan',penginapanController.get)
publicAPI.post('/api/penginapan/lokasi',penginapanController.getByLocation)

//API Paket-Penginapan
publicAPI.get('/api/paket-penginapan/:idPaket',paketPenginapanController.get)


export default publicAPI
