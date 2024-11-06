import { useForm } from "react-hook-form"
import { searchRequest } from "../api/Auth.js";


function SearchPage() {
    // const { register, handleSubmit } = useForm()
    const {handleSubmit } = useForm()
    return (
        <div className="flex flex-col justify-center h-dvh bg-black">
            <div className="flex flex-row justify-center">
                <div className="bg-green-500 p-10 shadow-2xl rounded-md shadow-green-200">
                    <form onSubmit={handleSubmit(() => {
                        searchRequest();
})}>
                        <h1 className="text-3xl mb-5 font-bold">Buscar Usuarios</h1>

                        
                        <input type="submit" className="bg-black p-2 rounded-md hover:bg-gray-500 text-white w-full mt-5" value="Enviar" />
                    </form>
                </div>
            </div>
        </div>
  )
}

export default SearchPage
