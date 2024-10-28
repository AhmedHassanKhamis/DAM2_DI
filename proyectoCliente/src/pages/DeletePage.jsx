import { useForm } from "react-hook-form"


function DeletePage() {
    const { register, handleSubmit } = useForm()
    return (

        <div className="container flex flex-row justify-center my-40 bg-backcolor-200">
            <div className="bg-backcolor-100 p-10 shadow-2xl rounded-md shadow-backcolor-100">
                <form onSubmit={handleSubmit((values) => {
                    console.log(values)
                })}>
                    <h1>Eliminar Usuario</h1>

                    <input 
                    type="text" {...register("username",{required:true})}
                    className="w-full bg-kidagray-200 px-4 py-2 my-4 rounded-md"
                    placeholder="Username"/>

                    <input type="submit" className="bg-blue-700 p-2 rounded-md hover:bg-blue-500" value="Enviar" />
                </form>
             
            </div>

        </div>

    )

}
export default DeletePage;
