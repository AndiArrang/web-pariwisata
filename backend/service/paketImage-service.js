import { createPaketImageValidation, updatePaketImageValidation } from "../validations/paketImage-validation.js"
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

export const updatePaketImage = async (image,idPaket) => {
    const result = updatePaketImageValidation.validate(image)
    if (result.error) {
        await cloudinary.uploader.destroy(image.public_id);
        throw new ResponseError(400,result.error.message)
    }

    return PaketImages.update(result.value,{
        where: {
            id_paket: idPaket
        }
    }).then(() => {
        return PaketImages.findOne({
            where: {
                id_paket: idPaket
            }
        })
    })
    
}



export const removePaketImage = async (idPaket) => {
    const paketImage = await PaketImages.findOne({
        where: {
            id_paket: idPaket
        }
    })

    if (!paketImage) {
        throw new ResponseError(404,'Paket image tidak ditemukan !')
    }

    try {  
        const response = await cloudinary.uploader.destroy(paketImage.public_id)
        if (response.result != 'ok') {
            throw new ResponseError(404,`${response.result} response from images server`)
        }
        await PaketImages.destroy({where: {id_paket: idPaket}})
        return response
    } catch (error) {
        throw new ResponseError(404,error.message)
    }
}

