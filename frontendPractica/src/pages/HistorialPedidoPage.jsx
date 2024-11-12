import React from 'react'
import { useForm } from 'react-hook-form'

function HistorialPedidoPage() {
    const {register, handleSubmit} = useForm()
  return (
    <div className='h-dvh w-dvw flex flex-col bg-yellow-100 justify-center '>
    <div className='container mx-auto'>
      <form className='flex flex-col gap-5 bg-yellow-800 box-border p-10 h-30' onSubmit={handleSubmit((value) => (value))}>
        <label htmlFor="nombreAlumno" className='text-yellow-100 text-xl'>Nombre del alumno:</label>
        <input type="text" className='bg-yellow-100 rounded-sm p-3' name="nombreAlumno" {...register('nombreAlumno', { required: true })} placeholder='nombre alumno...' />
        <input type="submit" className='bg-green-300 p-4' value="Check" />
      </form>
    </div>
  </div>
  )
}

export default HistorialPedidoPage
