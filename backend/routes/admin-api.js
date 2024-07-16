import express from 'express';
import paketController from '../controllers/paket-controller.js';
import { authMidlleware } from '../middleware/auth-middleware.js';

const adminAPI = express.Router();

adminAPI.use(authMidlleware)

adminAPI.post('/api/admin/paket',paketController.create)
adminAPI.patch('/api/admin/paket/:id',paketController.update)
adminAPI.delete('/api/admin/paket/:id',paketController.remove)

export default adminAPI