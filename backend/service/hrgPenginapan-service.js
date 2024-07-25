import { Op, Sequelize } from "sequelize"
import db from "../application/db.js"
import { ResponseError } from "../error-handler/response-error.js"
import HargaPenginapan from "../models/harga_penginapan.js"
import Penginapan from "../models/penginapan.js"
import { createHrgPenginapanValidation, updateHrgPenginapanValidation } from "../validations/hrgPenginapan-validation.js"
import validate from "../validations/validate.js"


export const createHargaPenginapan = async (request,idPenginapan) => {
    let datas = []
    
    if (!Array.isArray(request)) {
        datas.push(request)
    } else {
        datas = request
    }

    const penginapan = await Penginapan.findByPk(idPenginapan)

    if (!penginapan) {
        throw new ResponseError(404,'Penginapan tidak ditemukan !!')
    }

    // validasi max dan min orang dan validsi Joi pada data request
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].min_org > datas[i].max_org) {
            throw new ResponseError(400,'Minimal orang tidak boleh lebih besar dari max oarng')
        }
        for (let j = i + 1; j < datas.length; j++) {
          if (
            datas[i].min_org >= datas[j].min_org && datas[i].min_org <= datas[j].max_org  ||
            datas[i].max_org >= datas[j].min_org && datas[i].max_org <= datas[j].max_org
          ) {
            throw new ResponseError(400,'Jumlah orang tidak boleh sama atau antara max-min jumlah orang yg telah ada')
          }
        }
        validate(createHrgPenginapanValidation, datas[i]);
    }


    // validasi max min orang pada database serta insert data ke databse
    const transaction = await db.transaction()  
    try {
        for ( const data of datas) {
            const isDuplikat = await HargaPenginapan.findOne({
                where: {
                    id_penginapan: data.id_penginapan,
                    [Op.or]: [
                      {
                        [Op.and]: [
                          { min_org: { [Op.gte]: data.min_org } },
                          { min_org: { [Op.lte]: data.max_org } }
                        ]
                      },
                      {
                        [Op.and]: [
                          { max_org: { [Op.gte]: data.min_org } },
                          { max_org: { [Op.lte]: data.max_org } }
                        ]
                      }
                    ]
                }
            });
            if (isDuplikat) {
                throw new Error()
            }
            data.id_penginapan = idPenginapan;

            await HargaPenginapan.create(data,{transaction})
        }

        await transaction.commit()
    } catch (error) {
        await transaction.rollback()
        throw new ResponseError(400,'Jumlah orang tidak boleh sama atau antara max-min jumlah orang yg telah ada !!')
    }

    return Penginapan.findByPk(idPenginapan,{
        include: HargaPenginapan,
        order:[
            [HargaPenginapan,'min_org','ASC']
        ]
    })  
}

export const updateHargaPenginapan = async (request,idPenginapan) => {
    let datas = []
    
    if (!Array.isArray(request)) {
        datas.push(request)
    } else {
        datas = request
    }

    datas.forEach((data) => {
        validate(updateHrgPenginapanValidation,data)
    })

    const penginapan = await Penginapan.findByPk(idPenginapan)

    if (!penginapan) {
        throw new ResponseError(404,'Penginapan tidak ditemukan !!')
    }

    // validasi max dan min orang dan validsi Joi pada data request
    for (let i = 0; i < datas.length; i++) {
        // cek apakah min orang lebih besar dari max org 
        if (datas[i].min_org > datas[i].max_org) {
            throw new ResponseError(400,'Minimal orang tidak boleh lebih besar dari max orang')
        }
        //cek apakah ada duplikasi pada min dan max org
        for (let j = i + 1; j < datas.length; j++) {
          if (
            datas[i].min_org >= datas[j].min_org && datas[i].min_org <= datas[j].max_org  ||
            datas[i].max_org >= datas[j].min_org && datas[i].max_org <= datas[j].max_org
          ) {
            throw new ResponseError(400,'Jumlah orang tidak boleh sama atau antara max-min jumlah orang yg telah ada')
          }
        }
        validate(updateHrgPenginapanValidation, datas[i]);
    }

    // validasi max min orang pada database serta memasukkan data ke databse
    const transaction = await db.transaction()  
    try {
        // validasi min orang tidak oleh kurang dari max org
        for ( const data of datas) {
            const cekSelisihOrg = await HargaPenginapan.findOne({
                where: {
                    id: data.id,
                    [Op.or]: [
                        {max_org: {[Op.lt]: data.min_org}},
                        {min_org: {[Op.gt]: data.max_org}}
                    ]
                }
            })
            if (cekSelisihOrg) {
                throw new Error()
            }
            // validasi duplikasi max atau min orang
            const isDuplikat = await HargaPenginapan.findOne({
                where: {
                    id_penginapan: idPenginapan,
                    id: {
                        [Op.ne]: data.id
                    },
                    [Op.or]: [
                      {
                        [Op.and]: [
                          { min_org: { [Op.lte]: data.min_org } },
                          { max_org: { [Op.gte]: data.min_org } }
                        ]
                    },
                    {
                        [Op.and]: [
                        { min_org: { [Op.lte]: data.max_org } },
                        { max_org: { [Op.gte]: data.max_org } }
                        ]
                      }
                    ]
                }
            });
            if (isDuplikat) {
                throw new Error('error 1')
            }

            await HargaPenginapan.update(data,{
                where: {
                    id: data.id
                },
                transaction
            })
        }

        await transaction.commit()
    } catch (error) {
        await transaction.rollback()
        if (error.message == 'error 1') {
            throw new ResponseError(400,'Jumlah orang tidak boleh sama atau antara max-min jumlah orang yg telah ada !!')
        } else {
            throw new ResponseError(400,'Minimal orang tidak boleh lebih besar dari max orang')
        }
    }
   
    return Penginapan.findByPk(idPenginapan,{
        include: HargaPenginapan
    })
}

export const getHargaPenginapan = async (idPenginapan) => {
    const data = await Penginapan.findByPk(idPenginapan,{
        include: HargaPenginapan,
        order:[
            [HargaPenginapan,'min_org','ASC']
        ]
    })

    if (!data) {
        throw new ResponseError(404,'Penginapan tidak ditemukan')
    }

    if(data.harga_penginapans.length < 1) {
        throw new ResponseError(404,'Harga penginapan tidak ditemukan')
    }

    return data
}

export const removeHargaPenginapan = async (idHargaPenginapan) => {
    const result = await HargaPenginapan.destroy({
        where: {
            id: idHargaPenginapan
        }
    })

    if (!result) {
        throw new ResponseError(404, 'Harga Penginapan tidak ditemukan !!')
    }

    return result
}
