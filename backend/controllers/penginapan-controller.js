import { createPenginapan, getPenginapan, getPenginapanByLacation, removePenginapan, updatePenginapan } from "../service/penginapan-sevice.js"

const get = async (req,res,next) => {
    try {
        const result = await getPenginapan()

        if(result) {
            res.status(400).json({
                data: result
            })
        }
    } catch (error) {
        next(error)
    }
}

const getByLocation = async (req,res,next) => {
    try {
        const result = await getPenginapanByLacation(req.body.query)

        if(result) {
            res.status(400).json({
                data: result
            })
        }
    } catch (error) {
        next(error)
    }
}

const create = async (req,res,next) => {
    try {
        console.log(req.body)
        const result = await createPenginapan(req.body)

        if(result) {
            res.status(400).json({
                data: result
            })
        }
    } catch (error) {
        next(error)
    }
}

const update = async (req,res,next) => {
    try {
        const result = await updatePenginapan(req.body,req.params.id)

        if(result) {
            res.status(401).json({
                data: result
            })
        }
    } catch (error) {
        next(error)
    }
}

const remove = async (req,res,next) => {
    try {
        const result = await removePenginapan(req.params.id)

        if(result) {
            res.status(400).json({
                data: "OK"
            })
        }
    } catch (error) {
        next(error)
    }
}

export default {
    get,
    getByLocation,
    create,
    update,
    remove
}

