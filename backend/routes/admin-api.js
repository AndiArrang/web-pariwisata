import express from 'express';
import paketController from '../controllers/paket-controller.js';
import { authMidlleware } from '../middleware/auth-middleware.js';
import penginapanController from '../controllers/penginapan-controller.js';
import paketPenginapanController from '../controllers/paketPenginapan-controller.js';
import hrgPenginapanController from '../controllers/hrgPenginapan-controller.js';

const adminAPI = express.Router();

adminAPI.use(authMidlleware)

//API paket
adminAPI.post('/api/admin/paket',paketController.create)
adminAPI.patch('/api/admin/paket/:id',paketController.update)
adminAPI.delete('/api/admin/paket/:id',paketController.remove)

//API Penginapan
adminAPI.post('/api/admin/penginapan',penginapanController.create)
adminAPI.patch('/api/admin/penginapan/:id',penginapanController.update)
adminAPI.delete('/api/admin/penginapan/:id',penginapanController.remove)

//API Paket-Penginapan
adminAPI.post('/api/admin/paket-penginapan',paketPenginapanController.create)
adminAPI.post('/api/admin/paket-penginapan/:idPaket',paketPenginapanController.add)
adminAPI.put('/api/admin/paket-penginapan/:idPaket',paketPenginapanController.set)
adminAPI.delete('/api/admin/paket-penginapan/:idPaket',paketPenginapanController.remove)

//API Harga-penginapan
adminAPI.post('/api/admin/harga-penginapan/:idPenginapan',hrgPenginapanController.create)
adminAPI.patch('/api/admin/harga-penginapan/:idPenginapan',hrgPenginapanController.update)
adminAPI.delete('/api/admin/harga-penginapan/:idPenginapan',hrgPenginapanController.remove)

export default adminAPI