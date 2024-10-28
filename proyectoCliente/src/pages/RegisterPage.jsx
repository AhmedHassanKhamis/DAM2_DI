import { useForm } from "react-hook-form"


function RegisterPage() {
    const { register, handleSubmit } = useForm()
    return (
        <div className="flex flex-col justify-center w-dvw h-dvh bg-black">
            <div className="flex flex-row justify-center">
                <div className="bg-green-500 p-10 shadow-2xl rounded-md shadow-backcolor-100">
                    <form onSubmit={handleSubmit((values) => {
                        console.log(values)
                    })}>
                        <h1>Registrar Usuario</h1>

                        <input
                            type="text" {...register("username", { required: true })}
                            className="w-full bg-kidagray-200 px-4 py-2 my-4 rounded-md"
                            placeholder="Username" />

                        <input
                            type="password" {...register("password", { required: true })}
                            className="w-full bg-kidagray-200 px-4 py-2 my-4 rounded-md"
                            placeholder="Password" />

                        <input
                            type="email"  {...register("email", { required: true })}
                            className="w-full bg-kidagray-200 px-4 py-2 my-4 rounded-md"
                            placeholder="Email" />

                        <input type="submit" className="bg-blue-700 p-2 rounded-md hover:bg-blue-500" value="Enviar" />
                    </form>

                </div>

            </div>
        </div>

    )

}
export default RegisterPage;
