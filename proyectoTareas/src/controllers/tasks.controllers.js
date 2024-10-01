import taskModel from "../models/tasks.model.js";

export const task = (req, res) => {

    try {
        // const { date, description} = req.body;
        const fecha = body.date;
        const descripcion = body.description;

        const nuevaTarea = new task({
            date,
            description

        });
        nuevaTarea.save();
        res.send(fecha + " " + descripcion);
    
    } catch (error) {
        console.log(error)
    }
  


};
