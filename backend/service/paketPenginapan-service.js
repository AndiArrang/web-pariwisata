import { createPaketValidation } from "../validations/paket-validation.js"
import validate from "../validations/validate.js"
import { ResponseError } from "../error-handler/response-error.js"
import Penginapan from "../models/penginapan.js"
import Paket from "../models/paket.js"


// membuat paket baru serta menambahkan penginapan yang terhubung
export const createPaketWithPenginapans = async (request,idPenginapans) => {
    console.log(idPenginapans)
    const data = validate(createPaketValidation,request)
    // validasi duplikasi nama dan tipe data idPenginapans
    const countPaketName = await Paket.count({
        where: {
            nama: data.nama
        }
    })
    
    if (countPaketName === 1) {
        throw new ResponseError(400, 'Nama paket sudah ada !!')
    }

  // Cek penginapans 
    const penginapans = await Penginapan.findAll({
        where: {
            id_penginapan: idPenginapans
        }
    })

    if(penginapans.length < 1) {
        throw new ResponseError(404, 'Penginapan tidak ditemukan !!')
    }

    if (Array.isArray(idPenginapans)) {
        if (penginapans.length !== idPenginapans.length) {
            throw new ResponseError(404, 'Salah satu penginapan tidak ditemukan !!')
        }
    }

    // insert paket dan penginapan
    const paket = await Paket.create(data)
    await paket.addPenginapan(penginapans)
    console.log('hayyy')
    return Paket.findByPk(paket.dataValues.id_paket,{
        include: {
            model: Penginapan,
            attributes: ['id_penginapan','nama','lokasi','tipe'],
            through: {attributes: []}
        },
        attributes: ['id_paket','nama','harga','durasi','lokasi']
    })

}


// menambahkan penginapan ke paket yang sudah ada
export const addPenginapansToPaket = async (idPenginapans,idPaket) => {
    // cek paket
    const paket = await Paket.findByPk(idPaket)
    if (!paket) {
        throw new ResponseError(404,'Paket tidak ditemukan !!')
    }


    // Cek penginapans 
    const penginapans = await Penginapan.findAll({
        where: {
            id_penginapan: idPenginapans
        }
    })

    if(penginapans.length < 1) {
        throw new ResponseError(404, 'Penginapan tidak ditemukan !!')
    }

    if (Array.isArray(idPenginapans)) {
        if (penginapans.length !== idPenginapans.length) {
            throw new ResponseError(404, 'Salah satu penginapan tidak ditemukan !!')
        }
    }


    // insert penginapans to paket
    await paket.addPenginapan(penginapans)

    return Paket.findByPk(paket.dataValues.id_paket,{
        include: {
            model: Penginapan,
            attributes: ['id_penginapan','nama','lokasi','tipe'],
            through: {attributes: []}
        },
        attributes: ['id_paket','nama','harga','durasi','lokasi']
    })

}

// mengganti semua penginpan yang terhubung dengan paket dengan penginapan baru
export const setPenginapansToPaket = async (idPenginapans,idPaket) => {
    // cek paket
    const paket = await Paket.findByPk(idPaket)
    if (!paket) {
        throw new ResponseError(404,'Paket tidak ditemukan !!')
    }

     // Cek penginapans 
     const penginapans = await Penginapan.findAll({
        where: {
            id_penginapan: idPenginapans
        }
    })

    if(penginapans.length < 1) {
        throw new ResponseError(404, 'Penginapan tidak ditemukan !!')
    }

    if (Array.isArray(idPenginapans)) {
        if (penginapans.length !== idPenginapans.length) {
            throw new ResponseError(404, 'Salah satu atau lebih penginapan tidak ditemukan !!')
        }
    }

    // set daftar penginapan baru
    await paket.setPenginapans(penginapans)

    return Paket.findByPk(paket.dataValues.id_paket,{
        include: {
            model: Penginapan,
            attributes: ['id_penginapan','nama','lokasi','tipe'],
            through: {attributes: []}
        },
        attributes: ['id_paket','nama','harga','durasi','lokasi']
    })
}

// get penginapan by id paket
export const getPenginapanByPaketId = async (idPaket) => {
    return Paket.findByPk(idPaket,{
        include: {
            model: Penginapan,
            attributes: ['id_penginapan','nama','lokasi','tipe'],
            through: {attributes: []}
        },
        attributes: ['id_paket','nama','harga','durasi','lokasi']
    })
}

// menghapus penginapan yang terhubung dengan paket
export const removePaketPenginapanRelation = async (idPenginapans,idPaket) => {
    // cek paket
    const paket = await Paket.findByPk(idPaket)
    if (!paket) {
        throw new ResponseError(404,'Paket tidak ditemukan !!')
    }

    //cek penginapan dan relasinya dengan paket
    const relasi = await paket.hasPenginapans(idPenginapans)

    if(!relasi) {
        throw new ResponseError(404, 'Salah satu atau lebih penginapan tidak berelasi dengan paket!!')
    }
    
    // get dan hapus penginapan pada paket
    const penginapans = await Penginapan.findAll({
        where: {
            id_penginapan: idPenginapans
        }
    })

    return paket.removePenginapans(penginapans)
}


