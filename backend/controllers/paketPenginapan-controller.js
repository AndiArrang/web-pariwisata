import { addPenginapansToPaket, createPaketWithPenginapans, getPenginapanByPaketId, removePaketPenginapanRelation, setPenginapansToPaket } from "../service/paketPenginapan-service.js"

// controller membuat paket baru dan menambahkan penginapan ygg terhubung
const create = async (req,res,next) => {
    try {
        console.log(req.body)
        const idPenginapans = req.body.idPenginapans
        const newPaket = req.body
        delete newPaket.idPenginapans
        const result = await createPaketWithPenginapans(newPaket,JSON.parse(idPenginapans))

        if(result) {
            res.status(200).json({
                data: result,
                msg: 'Data berhasil di buat'
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
        const result = await addPenginapansToPaket(JSON.parse(idPenginapans),req.params.idPaket)

        if(result) {
            res.status(201).json({
                data: result,
                msg: 'Data berhasil ditambahkan'
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
        const result = await setPenginapansToPaket(JSON.parse(idPenginapans),req.params.idPaket)

        if(result) {
            res.status(201).json({
                data: result,
                msg: 'Data berhasil di set'
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
                msg: 'Data berhasil dihapus'
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






