import { loginAdmin } from "../service/admin-service.js"


const login = async (req,res,next) => {
    try {
        const result = await loginAdmin(req.body);
    } catch (error) {
        
    }
}