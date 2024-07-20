import Joi from "joi";

const tipePenginapan = ["Hotel","Villa"]

const createPenginapanValidation = Joi.object({
    nama: Joi.string().required(),
    lokasi: Joi.string().required(),
    tipe: Joi.string().valid(...tipePenginapan).required()
})

const updatePenginapanValidation = Joi.object({
    nama: Joi.string(),
    lokasi: Joi.string(),
    tipe: Joi.string()
})

export {
    createPenginapanValidation,
    updatePenginapanValidation
}