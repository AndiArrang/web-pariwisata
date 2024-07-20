import express from 'express';
import paketController from '../controllers/paket-controller.js';
import { authMidlleware } from '../middleware/auth-middleware.js';
import penginapanController from '../controllers/penginapan-controller.js';

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

export default adminAPI