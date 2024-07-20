import validate from "../validations/validate.js"
import { createPenginapanValidation, updatePenginapanValidation } from "../validations/penginapan-validation.js"
import Penginapan from "../models/penginapan.js"
import { ResponseError } from "../error-handler/response-error.js"


// fungsi create penginapan
export const createPenginapan = async (request) => {
    const data = validate(createPenginapanValidation,request)

    const countName = await Penginapan.count({
        where: {
            nama: data.nama
        }
    })

    if (countName === 1) {
        throw new ResponseError(400,"Penginapan sudah ada !!")
    }

    return Penginapan.create(data)
}

// fungsi update penginapan
export const updatePenginapan = async (request,id) => {
    const data = validate(updatePenginapanValidation,request)

    const penginapan = await Penginapan.findByPk(id)

    if (!penginapan) {
        throw new ResponseError(404, 'penginapan tidak ditemukan !!')
    }

    if (data.nama !== penginapan.dataValues.nama) {
        const duplicateName = await Penginapan.count({
            where: {
                nama: data.nama
            }
        })
    
        if (duplicateName === 1) {
            throw new ResponseError(400, 'Nama penginapan sudah ada !!')
        }
    }


    return penginapan.update(data,{
        where: {
            id_penginapan: id
        }
    }).then(() => {
        return Penginapan.findOne({
            where: {
                id_penginapan: id
            }
        })
    })
}



// fungsi get semua penginapan
export const getPenginapan = async () => {
    const result = await Penginapan.findAll();

    if (result.length < 1) {
        throw new ResponseError(404,'Penginapan not found !')
    }

    return result
}

// fungsi get penginapan by lokasi
export const getPenginapanByLacation = async (request) => {
    const result = await Penginapan.findAll({
        where: {
            lokasi: request
        }
    });

    if (result.length < 1) {
        throw new ResponseError(404,'Penginapan not found !')
    }

    return result
}

export const removePenginapan = async (id) => {
    const result = await Penginapan.destroy({
        where: {
            id_penginapan: id
        }
    })

    if (!result) {
        throw new ResponseError(404, 'Penginapan tidak ditemukan !!')
    }

    return result
}





