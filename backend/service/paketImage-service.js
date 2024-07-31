import { createPaketImageValidation } from "../validations/paketImage-validation.js"
import cloudinary from "../config/cloudinary.js"
import { ResponseError } from "../error-handler/response-error.js"
import PaketImages from "../models/paket_images.js"


export const uploadPaketImage = async (image) => {
    const result = createPaketImageValidation.validate(image)
    if (result.error) {
        await cloudinary.uploader.destroy(image.public_id);
        throw new ResponseError(400,result.error.message)
    }

    return PaketImages.create(result.value)
    
}

