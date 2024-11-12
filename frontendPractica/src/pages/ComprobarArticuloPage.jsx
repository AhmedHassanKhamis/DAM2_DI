import React from 'react'
import { useForm } from 'react-hook-form'
import { ComprobarArticulosRequest } from '../api/cafeteria';

function ComprobarArticuloPage() {
  const { register, handleSubmit } = useForm();
  return (

    <div className='h-dvh w-dvw flex flex-col bg-yellow-100 justify-center '>
      <div className='container xl:mx-auto md:mx-auto sm:mx-20'>
        <form className='flex flex-col gap-5 bg-yellow-800 box-border p-10 h-30' onSubmit={handleSubmit((value)=> 
          ComprobarArticulosRequest(value))}>
          <label htmlFor="nombreArticulo" className='text-yellow-100 text-xl'>Nombre del articulo:</label>
          <input type="text" className='bg-yellow-100 rounded-sm p-3' name="nombreArticulo" {...register('nombre', { required: true })} placeholder='nombre articulo...' />
          <input type="submit" className='bg-green-300 p-4' value="Check" />
        </form>
      </div>
    </div>
  )
}

export default ComprobarArticuloPage
