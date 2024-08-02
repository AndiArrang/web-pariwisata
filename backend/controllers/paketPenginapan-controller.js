import { addPenginapansToPaket, createPaketWithPenginapans, getPenginapanByPaketId, removePaketPenginapanRelation, setPenginapansToPaket } from "../service/paketPenginapan-service.js"

// controller membuat paket baru dan menambahkan penginapan ygg terhubung
const create = async (req,res,next) => {
    try {
        const idPenginapans = req.body.idPenginapans
        const newPaket = req.body
        delete newPaket.idPenginapans
        const result = await createPaketWithPenginapans(newPaket,idPenginapans)

        if(result) {
            res.status(200).json({
                status: 'success',
                message: 'Data added successfully.',
                data: result,
            })
        }
    } catch (error) {
        next(error)
    }
}

// controller menambahkan penginapan baru pada paket yang sudah ada
const add = async (req,res,next) => {
    try {
        const idPenginapans = req.body.idPenginapans
        const result = await addPenginapansToPaket(idPenginapans,req.params.idPaket)

        if(result) {
            res.status(201).json({
                status: 'success',
                message: 'Data added successfully.',
                data: result,
            })
        }
    } catch (error) {
        next(error)
    }
}

//controller mengganti semua penginapan pada paket dengan daftar penginapan baru
const set = async (req,res,next) => {
    try {
        const idPenginapans = req.body.idPenginapans
        const result = await setPenginapansToPaket(idPenginapans,req.params.idPaket)

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

// controller get paket beserta penginapan yang terhubung
const get = async (req,res,next) => {
    try {
        const result = await getPenginapanByPaketId(req.params.idPaket)

        if(result) {
            res.status(200).json({
                data: result
            })
        }
    } catch (error) {
        next(error)
    }
}


const remove = async (req,res,next) => {
    try {

        const idPenginapans = req.body.idPenginapans
        const result = await removePaketPenginapanRelation(JSON.parse(idPenginapans),req.params.idPaket)

        if(result) {
            res.status(200).json({
                status: 'success',
                message: 'Data deleted successfully.',
            })
        }
    } catch (error) {
        next(error)
    }
}

export default {
    get,
    create,
    add,
    set,
    remove
}






