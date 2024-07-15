import { createPaket, getPaket } from "../service/paket-service.js"


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


export default{
    get,
    create
}