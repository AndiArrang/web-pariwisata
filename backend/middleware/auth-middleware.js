import Admin from "../models/admin.js";

export const authMidlleware = async (req,res,next) => {
    // const token = req.get('Authorization');
    console.log(req.cookies)
    const token = req.cookies ? req.cookies.token : null ;
    console.log('ini: ',token)
    if (!token) {
        res.status(401).json({
            errors: 'Unauthorized'
        }).end()
    } else {
        const admin = await Admin.findOne({
            where: {
                token:token
            },
            attributes:['username']
        })

        if(!admin) {
            res.status(401).json({
                errors: 'Unauthorized'
            }).end()
        } else {
            req.admin = admin.dataValues
            next()
        }
    }
}