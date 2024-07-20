// import bcrypt from 'bcrypt'
// import Admin from '../models/admin.js'
// const registAdmin = async () => {

// import { Paket,Penginapan } from "../models/relasi.js"
// import model from "../models/relasi.js"

import Paket from "../models/paket.js"
import Penginapan from "../models/penginapan.js"
import { addPenginapansToPaket, createPaketWithPenginapans, getPenginapanByPaketId, removePaketPenginapanRelation, setPenginapansToPaket } from "../service/paketPenginapan-service.js"


//     const pw = await bcrypt.hash("12345678",10)
//     const result = await Admin.create({
//         username: "arrangandi",
//         password: pw,
//         name: "arrang",
//     })

//     console.log(result)
// }

// registAdmin()

const buatPenginapan = async () => {
    return Penginapan.create({
        nama: 'Villa Peramata',
        lokasi: 'malino',
        tipe: 'hotel'
    })
}

// await buatPenginapan()

const testApi = async () => {
    const result = await createPaketWithPenginapans({
        nama: "paket A",
            harga: 200,
            lokasi: "malino",
            durasi: "2 hari"
    },[2,3,4])

    console.log(JSON.stringify(result))
}
// testApi()

const testApiAdd = async () => {
    const result = await addPenginapansToPaket([3,9],19)

    console.log(JSON.stringify(result))
}
// testApiAdd()

const findPenginapan = async () => {
    const result = await Penginapan.findAll([2,9])

    console.log(JSON.stringify(result))
}

// findPenginapan()


const testApiSet = async () => {
    const result = await setPenginapansToPaket(2,19)

    console.log(JSON.stringify(result))
}
// testApiSet()


const getPenginapan = async () => {
    const paket = await getPenginapanByPaketId(19)

    console.log(JSON.stringify(paket))
}

// getPenginapan()

const removePenginapans = async () => {
    const paket = await removePaketPenginapanRelation(2,20)
    console.log(JSON.stringify(paket))
}

removePenginapans()

const hasPenginpans = async () => {
    const paket = await Paket.findByPk(20)

    const result = await paket.hasPenginapans([2,5])

    console.log(result)
}
// hasPenginpans()