import React from 'react'
import { useForm } from 'react-hook-form'
import { CrearPeliculaRequest } from '../api/peliculas.js'

function CrearPeliculaPage() {
    const { register, handleSubmit } = useForm()
    return (
        <div className='h-dvh flex flex-col justify-center'>
            <div className='container mx-5 lg:mx-auto'>
                <form className='mt-20 border border-black  flex flex-col gap-5 p-10 w-96 mx-auto' onSubmit={handleSubmit((value) => CrearPeliculaRequest(value))}>
                    <label className='md:text-base lg:text-lg sm:text-sm xl:text-xl  text-xl' htmlFor="titulo">Titulo:</label>
                    <input className='md:text-base lg:text-lg sm:text-sm xl:text-xl  p-3 border border-gray-400 rounded-md' placeholder='aqui..' type="text" name="titulo"   {...register("tituloPelicula", { required: true })} />

                    <label className='md:text-base lg:text-lg sm:text-sm xl:text-xl  text-xl' htmlFor="director">Director:</label>
                    <input className='md:text-base lg:text-lg sm:text-sm xl:text-xl  p-3 border border-gray-400 rounded-md' placeholder='aqui..' type="text" name="director"   {...register("directorPelicula", { required: true })} />

                    <label className='md:text-base lg:text-lg sm:text-sm xl:text-xl  text-xl' htmlFor="duracion">Duracion:</label>
                    <input className='md:text-base lg:text-lg sm:text-sm xl:text-xl  p-3 border border-gray-400 rounded-md' placeholder='aqui..' type="text" name="duracion"   {...register("duracionPelicula", { required: true })} />

                    <label className='md:text-base lg:text-lg sm:text-sm xl:text-xl  text-xl' htmlFor="disponibilidad">Disponibilidad:</label>
                    <input className='md:text-base lg:text-lg sm:text-sm xl:text-xl  p-3 border border-gray-400 rounded-md' placeholder='aqui..' type="text" name="disponibilidad"   {...register("disponibilidadPelicula", { required: true })} />

                    <input className='border border-transparent p-4 bg-purple-800 hover:bg-purple-500 transition-all' type="submit" value="Crear" />
                </form>
            </div>
        </div>
    )
}

export default CrearPeliculaPage
