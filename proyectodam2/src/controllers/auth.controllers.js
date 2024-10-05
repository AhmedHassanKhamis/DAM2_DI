import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async(req, res) => {

    try {

        const passwordHash = bcrypt.hashSync(req.body.password, 10);

        const { username, email, password } = req.body

        const newUser = new User({
            username,
            email,
            password : passwordHash

        });
        const userSaved = await newUser.save();
        // res.json(userSaved);

        res.json({
            _id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email
        })
        
    } catch (error) {
        console.log(error);
    }
  


};
export const login = (req, res) => {res.send("logeandose")};
