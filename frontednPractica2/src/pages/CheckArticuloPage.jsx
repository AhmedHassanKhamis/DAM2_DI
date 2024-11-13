import React from 'react'
import { useForm } from 'react-hook-form'
import { CheckArticuloRequest } from '../api/cafeteria.api';

function CheckArticuloPage() {
  const { register, handleSubmit } = useForm();
  return (
    <div className='bg-yellow-100 h-dvh flex flex-col justify-center '>
      <div className='container mx-auto'>
        <form className='flex flex-col w-72  mx-auto border border-black p-10 gap-10' onSubmit={handleSubmit((value) => CheckArticuloRequest(value))}>
          <label htmlFor="nombreArticulo" className='text-xl'>Nombre Articulo</label>
          <input type="text"  className="border border-gray-100 p-2" placeholder='nombre..' name="nombreArticulo" {...register('nombre', { required: true })} />
          <input type="submit" className='border border-transparent p-2 bg-purple-800 rounded-md text-white' value="Checkear" />
        </form>
      </div>
    </div>
  )
}

export default CheckArticuloPage
