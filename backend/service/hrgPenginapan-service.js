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
            throw new ResponseError(400,'Min orang tidak boleh lebih besar dari max orang')
        }
        // validasi tumpang tindih data
        for (let j = i + 1; j < datas.length; j++) {
          if (
            datas[i].min_org >= datas[j].min_org && datas[i].min_org <= datas[j].max_org  ||
            datas[i].max_org >= datas[j].min_org && datas[i].max_org <= datas[j].max_org ||
            datas[i].min_org < datas[j].min_org && datas[i].max_org > datas[j].max_org ||
            datas[i].max_org > datas[j].max_org && datas[i].min_org < datas[j].min_org 
          ) {
            throw new ResponseError(400,`Data min_org : ${datas[i].min_org},max_org : ${datas[i].max_org} konflik dengan data request`)
          }
        }

        //validasi tipe data menggunakan Joi
        validate(createHrgPenginapanValidation, datas[i]);
    }


    // validasi tumpang tindih data pada database serta insert data ke databse
    const transaction = await db.transaction()  
    try {
        for ( const data of datas) {
            console.log(data)
            const isDuplikat = await HargaPenginapan.findOne({
                where: {
                    id_penginapan: idPenginapan,
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
                      },
                      {
                        [Op.and]: [
                          { min_org: { [Op.gt]: data.min_org } },
                          { max_org: { [Op.lt]: data.max_org } }
                        ]
                      },
                      {
                        [Op.and]: [
                          { max_org: { [Op.lt]: data.max_org } },
                          { min_org: { [Op.gt]: data.min_org } }
                        ]
                      }
                    ]
                }
            });
            if (isDuplikat) {
                throw new Error(`Data min_org : ${data.min_org},max_org : ${data.max_org} konflik dengan data pada database`)
            }
            data.id_penginapan = idPenginapan;

            await HargaPenginapan.create(data,{transaction})
        }

        await transaction.commit()
    } catch (error) {
        await transaction.rollback()
        throw new ResponseError(400,error.message)
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
        //cek tumpang tindih data pada data request
        for (let j = i + 1; j < datas.length; j++) {
          if (
            datas[i].min_org >= datas[j].min_org && datas[i].min_org <= datas[j].max_org  ||
            datas[i].max_org >= datas[j].min_org && datas[i].max_org <= datas[j].max_org ||
            datas[i].min_org < datas[j].min_org && datas[i].max_org > datas[j].max_org ||
            datas[i].max_org > datas[j].max_org && datas[i].min_org < datas[j].min_org 
          ) {
            throw new ResponseError(400,`Data min_org : ${datas[i].min_org},max_org : ${datas[i].max_org} konflik dengan data request`)
          }
        }
        validate(updateHrgPenginapanValidation, datas[i]);
    }

    // validasi max min orang pada database serta memasukkan data ke databse
    const transaction = await db.transaction()  
    try {
        // validasi min orang tidak boleh kurang dari max org
        for ( const data of datas) {
            // cek apakah harga penginapan ada
            const hargaPenginapan = await HargaPenginapan.findByPk(data.id)
            if (!hargaPenginapan) {
                throw new Error(`Harga penginapan dengan id ${data.id} tidak ditemukan !!`)
            }
            
            // jika data yang dikirim hanya salah satu dari min dan max
            if (!data.min_org || !data.max_org) {
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
                    throw new Error('Minimal orang tidak boleh lebih besar dari max orang')
                }
            }
            // validasi tumpang tindih data pada database
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
                    },
                    {
                        [Op.and]: [
                          { min_org: { [Op.gt]: hargaPenginapan.min_org } },
                          { max_org: { [Op.lt]: data.max_org } }
                        ]
                      },
                      {
                        [Op.and]: [
                          { max_org: { [Op.lt]: hargaPenginapan.max_org } },
                          { min_org: { [Op.gt]: data.min_org } }
                        ]
                      }
                    ]
                }
            });
            if (isDuplikat) {
                throw new Error(`Data min_org : ${data.min_org}, max_org : ${data.max_org} konflik dengan data pada database`)
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
        throw new ResponseError(400,error.message)
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

export const removeHargaPenginapan = async (id) => {
    const result = await HargaPenginapan.destroy({
        where: {
            id: id
        }
    })

    if (!result) {
        throw new ResponseError(404, 'Harga Penginapan tidak ditemukan !!')
    }

    return result
}
