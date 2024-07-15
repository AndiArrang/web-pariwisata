import express from 'express';
import paketController from '../controllers/paket-controller.js';

const adminAPI = express.Router();

adminAPI.post('/api/admin/paket',paketController.create)

export default adminAPI