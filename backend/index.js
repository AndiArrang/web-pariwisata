import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import publicAPI from './routes/public-api.js'
import adminAPI from './routes/admin-api.js'
import { errorMidlleware } from './middleware/error-middleware.js'
import cookieParser from 'cookie-parser'
import 'dotenv/config.js'
import multer from 'multer'
// import { uploadRouter } from './utils/upload-thing.js'
// import { createRouteHandler } from 'uploadthing/express'
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

import fs from 'fs'
import axios from 'axios'

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "../backend/utils/paket-images/");
//     },
//     filename: (req, file, cb) => {
//       cb(null, Date.now() + "-" + file.originalname);
//     },
//   });
  
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'uploads',
      allowed_formats: ['jpg', 'png'],
    },
  });
  

  const upload = multer({ storage })


  // Konfigurasi Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
const web = express()

web.use(cookieParser())
web.use(cors({credentials: true}))
web.use(express.json())
web.use(express.urlencoded({extended: true}));
web.use(bodyParser.urlencoded({ extended: true }));
web.use(bodyParser.json());



web.use(errorMidlleware)


// web.use(
//     "/api/uploadthing",
//     createRouteHandler({
//       router: uploadRouter,
//       config: { /* Config di sini */ },
//     })
//   );
  
  // Rute untuk mengunggah file menggunakan multer
  web.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
  
    res.json({ url: req.file.path });
  });
  

  web.use(publicAPI)
web.use(adminAPI)

web.listen(3001, () => {
    console.log(`Example app listening on port ${3001}`)
}) 