import Joi from 'joi';

const createPaketImageValidation = Joi.object({
    id_paket: Joi.number().required(),
    url: Joi.string().required(),
    public_id: Joi.string().required()
})

const updatePaketImageValidation = Joi.object({
    url: Joi.string().required(),
    public_id: Joi.string().required()
})

export {
    createPaketImageValidation,
    updatePaketImageValidation
}