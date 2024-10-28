import { useForm } from "react-hook-form"

function DeletePage() {
    const { register, handleSubmit } = useForm()
    return (
        <div className="flex flex-col justify-center w-dvw h-dvh bg-black">
            <div className="flex flex-row justify-center">
                <div className="bg-green-500 p-10 shadow-2xl rounded-md shadow-green-200">
                    <form onSubmit={handleSubmit((values) => {
                        console.log(values)
                    })}>
                        <h1 className="text-3xl mb-5 font-bold">Eliminar Usuario</h1>

                        <input
                            type="text" {...register("username", { required: true })}
                            className="w-full bg-black px-4 py-2 my-4 rounded-md text-white"
                            placeholder="Username" />

                        <input type="submit" className="bg-black p-2 rounded-md hover:bg-gray-500 text-white w-full mt-5" value="Enviar" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DeletePage;
