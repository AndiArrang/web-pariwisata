import { loginAdmin } from "../service/admin-service.js"


const login = async (req,res,next) => {
    try {
        const result = await loginAdmin(req.body);
        console.log(result)
        const time = new Date();
        time.setDate(time.getDate() + 7);
        if (result) {
            res.cookie('token',result.token ,{httpOnly: true, expires: time } )
            res.status(200).json({
                data: result
            })
        }
    } catch (error) {
        next(error)
    }
}

export default {
    login
}