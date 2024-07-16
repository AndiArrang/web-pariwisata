import Joi from 'joi';

const createPaketValidation = Joi.object({
    nama: Joi.string().required(),
    harga: Joi.number().required(),
    lokasi: Joi.string().required(),
    durasi: Joi.string().required()
})

const updatePaketValidation = Joi.object({
    nama: Joi.string(),
    harga: Joi.number(),
    lokasi: Joi.string(),
    durasi: Joi.string()
})

export {
    createPaketValidation,
    updatePaketValidation
}