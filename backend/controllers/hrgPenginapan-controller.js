import { createHargaPenginapan, getHargaPenginapan, removeHargaPenginapan, updateHargaPenginapan } from "../service/hrgPenginapan-service.js"


const create = async (req,res,next) => {
    try {
        console.log(req.body)
        const result = await createHargaPenginapan(req.body,req.params.idPenginapan)

        if(result) {
            res.status(200).json({
                data: result,
                msg: 'Data berhasil dibuat !'
            })
        }
    } catch (error) {
        next(error)
    }
}

const update = async (req,res,next) => {
    try {
        console.log(req.body)
        const result = await updateHargaPenginapan(req.body,req.params.idPenginapan)

        if(result) {
            res.status(201).json({
                data: result,
                msg: 'Data berhasil diupdate !'
            })
        }
    } catch (error) {
        next(error)
    }
}

const get = async (req,res,next) => {
    try {
        const result = await getHargaPenginapan(req.params.idPenginapan)

        if(result) {
            res.status(200).json({
                data: result,
            })
        }
    } catch (error) {
        next(error)
    }
}

const remove = async (req,res,next) => {
    try {
        const result = await removeHargaPenginapan(req.params.idPenginapan)

        if(result) {
            res.status(200).json({
                msg: 'Data berhasi dihapus !'
            })
        }
    } catch (error) {
        next(error)
    }
}


export default {
    create,
    update,
    get,
    remove
}