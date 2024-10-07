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
export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const usuario = await User.findOne({username : username});
        if (usuario) {
            if (await bcrypt.compare(password, usuario.password)) {
                res.send(`Usuario logeado \n -> ${usuario.username}`);
            }
        } else {
            res.send("Usuario no Encontrado");
        }


    } catch (error) {
        console.log(error)
    }



};


export const actualizarUsuario = async (req, res) => {
    const {  username, oldPassword , newPassword } = req.body;
    try {
        const usuarioExiste = await User.findOne({username : username});
        
        if (usuarioExiste) {
            if (await bcrypt.compare(oldPassword, usuarioExiste.password)) {
                const passwordHash = bcrypt.hash..
                usuarioExiste.password = newPassword;

            }
        }else{
            res.send("usuario no encontrado");
        }

    } catch (error) {
        console.log(error);
    }

}