import User from "../models/user.model.js";

export const register = (req, res) => {

    try {
        const { username, email, password } = req.body

        const newUser = new User({
            username,
            email,
            password

        });
        newUser.save();
    
    } catch (error) {
        
    }
  


};
export const login = (req, res) => {res.send("logeandose")};
