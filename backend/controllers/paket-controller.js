import { createPaket, getPaket, getPaketByLokasi, getPaketBySearch, removePaket, updatePaket } from "../service/paket-service.js"


const get = async (req,res,next) => {
    try {
        const result = await getPaket()

        if(result) {
            res.status(400).json({
                data:result
            })
        }
    } catch (error) {
        next(error)
    }
    
}
const getByLokasi = async (req,res,next) => {
    try {
        const result = await getPaketByLokasi(req.body.query)

        if(result) {
            res.status(400).json({
                data:result
            })
        }
    } catch (error) {
        next(error)
    }
    
}
const getBySearch = async (req,res,next) => {
    try {
        const result = await getPaketBySearch(req.body.query)

        if(result) {
            res.status(400).json({
                data:result
            })
        }
    } catch (error) {
        next(error)
    }
    
}



const create = async (req,res,next) => {
    try {
        console.log(req.body)
        const result = await createPaket(req.body)

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
        console.log(req.body,req.params.id)
        const result = await updatePaket(req.body,req.params.id)

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
        console.log(req.params.id)
        const result = await removePaket(req.params.id)

        if(result) {
            res.status(400).json({
                data: "OK"
            })
        }
    } catch (error) {
        next(error)
    }
    
}


export default{
    get,
    create,
    update,
    remove,
    getByLokasi,
    getBySearch
}