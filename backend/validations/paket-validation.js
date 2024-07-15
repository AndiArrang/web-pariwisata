import Joi from 'joi';

const createPaketValidation = Joi.object({
    nama: Joi.string().required(),
    harga: Joi.number().required(),
    lokasi: Joi.string().required(),
    durasi: Joi.string().required()
})

export {
    createPaketValidation
}