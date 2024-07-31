import multer from "multer";
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from "../config/cloudinary.js";
import { ResponseError } from "../error-handler/response-error.js";
import Paket from "../models/paket.js";
import PaketImages from "../models/paket_images.js";
  
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'web-pariwisata/paket-images',
      allowed_formats: ['jpg', 'png','jpeg'],
    }
  });


export const upload = multer({ 
    storage,
    fileFilter: async (req, file, cb) => {
      // validasi id paket 
      console.log(file)
        const idPaket = req.params.idPaket;

        // cek apakah paket ada
        const paket = await Paket.findByPk(idPaket);
        if (!paket) {
          return cb(new ResponseError(404,'Paket tidak ditemukan !'),false); 
        } 

        // cek duplikasi id paket
        const isDuplikat = await PaketImages.count({
          where: {
            id_paket: idPaket
          }
        })
        if (isDuplikat > 0) {
          return cb(new ResponseError(404,'Paket image sudah ada !'),false); 
        }

        // upload image
        cb(null, true);
      }
})

