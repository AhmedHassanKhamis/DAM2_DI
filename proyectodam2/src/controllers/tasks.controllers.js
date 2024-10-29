import Task from "../models/tasks.model.js";


export const crearTarea = async(req,res) => {
    
    try {
        const { username, task, date } = req.body

        const nuevaTarea = new Task({
            username: username,
            task: task,
            date: date
        })
        const tareaCreada = await nuevaTarea.save();
        res.json({
            username: tareaCreada.username,
            task: tareaCreada.username,
            date: tareaCreada.date
        })
        
    } catch (error) {
        res.send(error);
    }
}


export const  actualizarTarea = async(req, res) => {
    const { username, task } = req.body;
    try {
        const tarea = Task.findOne({username: username});
        if (tarea) {
            tarea.task = task;
            await tarea.save();
            res.send("tarea actualizada!");
        } else {
            res.send("no existe la tarea");
        }
    } catch (error) {
        res.send(error);
    }
}

export const borrarTarea = async (req, res) => {

    try {
        const { username, task } = req.body;
        await Task.findOneAndDelete({
            username: username,
            task: task
        })
        res.send("Tarea eliminada!");
    } catch (error) {
        res.send(error);
    }
}

export const buscarTarea = async (req,res) => {
    const {username} = req.body;
    try {
        const tareas = await Task.find({
            username: username
        })
        res.send(tareas);
    } catch (error) {
        res.send(error)        
    }
}