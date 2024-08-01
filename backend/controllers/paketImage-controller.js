import { removePaketImage, updatePaketImage, uploadPaketImage } from "../service/paketImage-service.js"


const upload = async (req,res,next) => {
    try {
        const image = {
            id_paket: req.params.idPaket,
            url: req.file.path,
            public_id: req.file.filename
        }
        const result = await uploadPaketImage(image)

        if(result) {
            res.status(200).json({
                status: 'success',
                message: 'Data added successfully.',
                data: result
            })
        }
    } catch (error) {
        next(error)
    }
}

const update = async (req,res,next) => {
    try {
        const image = {
            url: req.file.path,
            public_id: req.file.filename
        }
        const result = await updatePaketImage(image,req.params.idPaket)

        if(result) {
            res.status(201).json({
                status: 'success',
                message: 'Data updated successfully.',
                data: result
            })
        }
    } catch (error) {
        next(error)
    }
}

const remove = async (req,res,next) => {
    try {
        const result = await removePaketImage(req.params.idPaket)

        if(result) {
            res.status(200).json({
                status: 'success',
                message: 'Data deleted successfully.',
                data: result
            })
        }
    } catch (error) {
        next(error)
    }
}


export default {
    upload,
    update,
    remove
}