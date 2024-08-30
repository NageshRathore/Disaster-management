import user from "@/models/user";
import connectDb from "@/middleware/mongoose";
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        let users = await user.findOne({ "email": req.body.email });
        const bytes = CryptoJS.AES.decrypt(users.password, 'secret123');
        let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
        if (users) {
            if (req.body.email === users.email && req.body.password === decryptedPass) {
                const token = jwt.sign({ email: users.email, name: users.name, role: users.role }, 'jwtsecret', { expiresIn: "2d" });
                res.status(200).json({ success: true, token, role: users.role });
            } else {
                res.status(200).json({ success: false, error: "Invalid credentials" });
            }
        } else {
            res.status(200).json({ success: false, error: "No user found" });
        }
    } else {
        res.status(400).json({ error: "Method not allowed" });
    }
};

export default connectDb(handler);
