import { uploadPaketImage } from "../service/paketImage-service.js"


const upload = async (req,res,next) => {
    try {
        const image = {
            id_paket: req.params.idPaket,
            url: req.file.path,
            public_id: req.file.filename
        }
        console.log(image)
        const result = await uploadPaketImage(image)
        console.log(result)

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

export default {
    upload
}