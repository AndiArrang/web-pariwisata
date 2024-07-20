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

export const getPaketByLokasi = async (request) => {
    const result = await Paket.findAll({
        where: {
            lokasi: request
        }
    });

    if (result.length < 1) {
        throw new ResponseError(404,'Paket not found !')
    }

    return result
}

export const getPaketBySearch = async (request) => {
    const result = await Paket.findAll({
        where: {
            nama: request
        }
    });

    if (result.length < 1) {
        throw new ResponseError(404,'Paket not found !')
    }

    return result
}

export const createPaket = async (request) => {
    const data = validate(createPaketValidation,request)

    const countPaketName = await Paket.count({
        where: {
            nama: data.nama
        }
    })
    
    if (countPaketName === 1) {
        throw new ResponseError(400, 'Nama paket sudah ada !!')
    }

    return Paket.create(data)
}

export const updatePaket = async (request,id) => {
    const data = validate(createPaketValidation,request)

    const paket = await Paket.findByPk(id)

    if (!paket) {
        throw new ResponseError(404, 'Paket tidak ditemukan !!')
    }

    if (data.nama !== paket.dataValues.nama) {
        const duplicateName = await Paket.count({
            where: {
                nama: data.nama
            }
        })
    
        if (duplicateName === 1) {
            throw new ResponseError(400, 'Nama paket sudah ada !!')
        }
    }


    return Paket.update(data,{
        where: {
            id_paket: id
        }
    }).then(() => {
        return Paket.findOne({
            where: {
                id_paket: id
            }
        })
    })
}

export const removePaket = async (id) => {
    const result = await Paket.destroy({
        where: {
            id_paket: id
        }
    })

    if (!result) {
        throw new ResponseError(404, 'Paket tidak ditemukan !!')
    }

    return result
}





