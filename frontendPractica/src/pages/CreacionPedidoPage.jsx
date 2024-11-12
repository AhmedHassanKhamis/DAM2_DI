import React from 'react'
import { useForm } from 'react-hook-form'
import { CrearPedidoRequest } from '../api/cafeteria';

function CreacionPedidoPage() {
    const { register, handleSubmit} = useForm();
  return (
    <div className='h-dvh w-dvw flex flex-col bg-yellow-100 justify-center '>
    <div className='container mx-auto'>
      <form className='flex flex-col gap-5 bg-yellow-800 box-border p-10 h-30' onSubmit={handleSubmit((value) => 
        CrearPedidoRequest(value))}>
        <label htmlFor="nombreAlumno" className='text-yellow-100 text-xl'>Nombre del Alumno:</label>
        <input type="text" className='bg-yellow-100 rounded-sm p-3' name="nombreAlumno" {...register('nombreAlumno', { required: true })} placeholder='nombre alumno...' />
        
        <label htmlFor="nombreArticulo" className='text-yellow-100 text-xl'>Nombre del articulo:</label>
        <input type="text" className='bg-yellow-100 rounded-sm p-3' name="nombreArticulo" {...register('nombreArticulo', { required: true })} placeholder='nombre articulo...' />
        
        <label htmlFor="cantidad" className='text-yellow-100 text-xl'>Numero de articulos:</label>
        <input type="number" min="0" className='bg-yellow-100 rounded-sm p-3' name="cantidad" {...register('cantidad', { required: true })} />
        
        <label htmlFor="hora" className='text-yellow-100 text-xl'>Hora de recogida:</label>
        <input type="text" className='bg-yellow-100 rounded-sm p-3' name="hora" {...register('hora', { required: true })} placeholder='Hora de recogida...' />
        
        <input type="submit" className='bg-green-300 p-4' value="Check" />
      </form>
    </div>
  </div>
  )
}

export default CreacionPedidoPage
