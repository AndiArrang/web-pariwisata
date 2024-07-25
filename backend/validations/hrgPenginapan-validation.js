import Joi from 'joi';

const createHrgPenginapanValidation = Joi.object({
    min_org: Joi.number().required(),
    max_org: Joi.number().required(),
    harga: Joi.number().required(),
})

const updateHrgPenginapanValidation = Joi.object({
    id: Joi.number().required(),
    min_org: Joi.number(),
    max_org: Joi.number(),
    harga: Joi.number()
})

export {
    createHrgPenginapanValidation,
    updateHrgPenginapanValidation
}