import React from 'react'
import { useForm } from 'react-hook-form'
import { CrearPedidoRequest } from '../api/cafeteria.api'

function CrearPedidoPage() {
  const { register, handleSubmit } = useForm()
  return (
    <div className='bg-yellow-100 h-dvh flex flex-col justify-center'>
      <div className='container max-lg:mx-20 lg:mx-auto'>
      <form className='flex flex-col gap-4 border border-black p-10' onSubmit={handleSubmit((value) => CrearPedidoRequest(value))}>
        <label className="text-xl" htmlFor="nombreAlumno">Nombre alumno:</label>
        <input className='border border-gray-300 p-3' placeholder='aqui' type="text" name="nombreAlumno"{...register('nombreAlumno',{required:true})}/>

        <label className="text-xl" htmlFor="nombreArticulo">Nombre Articulo</label>
        <input className='border border-gray-300 p-3' placeholder='aqui' type="text" name="nombreArticulo"{...register('nombreArticulo',{required:true})}/>
        
        <label className="text-xl" htmlFor="cantidad">Cantidad:</label>
        <input className='border border-gray-300 p-3' placeholder='aqui' type="number" min='0' name="numeroArticulos"  {...register('cantidad',{required:true})}/>
        
        <label className="text-xl" htmlFor="hora">Hora de recogida</label>
        <input className='border border-gray-300 p-3' placeholder='aqui' type="text" name="horaRecogida" {...register('hora',{required:true})}/>
        
        <input type="submit" value="Crear" className='border border-transparent bg-purple-800 p-3 text-white w-40 self-center' />
      </form>
      </div>
    </div>
  )
}

export default CrearPedidoPage
