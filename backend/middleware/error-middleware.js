import { ResponseError } from "../error-handler/response-error.js";
import multer from "multer";
const errorMidlleware = (err,req,res,next) => {
    if (!err) {
        next();
        return
    }
    if(err instanceof ResponseError) {
        res.status(err.status).json({
            errors: err.message
        }).end();
    } else  if (err instanceof multer.MulterError) {
        res.status(err.status).json({
            errors: err.message
        }).end();
    }
    else {
        console.log(err.status)
        res.status(500).json({
            errors: err.message
        }).end()
    }   
}

export {
    errorMidlleware
}