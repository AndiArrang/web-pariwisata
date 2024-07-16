import bcrypt from 'bcrypt'
import Admin from '../models/admin.js'
const registAdmin = async () => {

    const pw = await bcrypt.hash("12345678",10)
    const result = await Admin.create({
        username: "arrangandi",
        password: pw,
        name: "arrang",
    })

    console.log(result)
}

registAdmin()

