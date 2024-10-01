import taskModel from "../models/tasks.model.js";

export const task = (req, res) => {

    try {
        const { date, description} = req.body;
        const fecha = date;
        const descripcion = description;

        const nuevaTarea = new taskModel({
            date,
            description

        });
        nuevaTarea.save();
        res.send(fecha + " " + descripcion);
    
    } catch (error) {
        console.log(error)
    }
  


};
