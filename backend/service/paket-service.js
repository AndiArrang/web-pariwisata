import Paket from "../models/paket.js";
import { createPaketValidation } from "../validations/paket-validation.js";
import validate from "../validations/validate.js";
import { ResponseError } from "../error-handler/response-error.js";

export const getPaket = async () => {
    const result = await Paket.findAll();

    if (result.length < 1) {
        throw new ResponseError(404,'Paket not found !')
    }

    return result
}

export const createPaket = async (request) => {
    const data = validate(createPaketValidation,request)

    return Paket.create(data)
}



