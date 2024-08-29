//Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import user from "@/models/user";
import connectDb from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
const handler = async (req, res) => {

    if (req.method == 'POST') {
        let users = await user.findOne({ "email": req.body.email })
        const bytes  = CryptoJS.AES.decrypt(users.password, 'secret123');
        let decryptedPass=bytes.toString(CryptoJS.enc.Utf8);
        if (users) {
            if (req.body.email == users.email && req.body.password == decryptedPass) {
                var token = jwt.sign({email: users.email, name: users.name }, 'jwtsecret',{expiresIn:"2d"});
            
                res.status(200).json({success:true,token});
            } else {
                res.status(200).json({ success: false, error: "invalid credentials " });
            }
        }else{
            res.status(200).json({ success: false, error: "no user" });

        }


    } else {
        res.status(400).json({ error: "this method not allowed" })
    }

}
export default connectDb(handler);