import Admin from "../models/admin.js";
import { ResponseError } from "../error-handler/response-error.js";
import bcrypt from 'bcrypt'
import { v4 as uuid } from "uuid";


export const loginAdmin = async (request) => {
    const admin = Admin.findOne({
        where: {
            username: request.username
        }
    })

    if(!admin) {
        throw new ResponseError(400,'username or password wrong !!!')
    }

    const isPasswordValid = bcrypt.compare(request.password,admin.password)
    if (!isPasswordValid) {
        throw new ResponseError(400,'username or password wrong !!!')
    }

    const token = uuid().toString();

    return Admin.update({
        token: token
    },
    {
        where:{
            username: admin.username,   
        },
    }).then(() => {
       return Admin.findOne({
            where: {
                token: token
            },
            attributes: ['token']
       })
    })

}

