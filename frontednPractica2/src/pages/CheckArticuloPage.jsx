import React from 'react'
import { useForm } from 'react-hook-form'
import { CheckArticuloRequest } from '../api/cafeteria.api';

function CheckArticuloPage() {
    const {register, handleSubmit} = useForm();
  return (
    <div>
      <form className='' onSubmit={handleSubmit((value)=> CheckArticuloRequest(value))}>
        <label htmlFor="nombreArticulo">Nombre Articulo</label>
        <input type="text" name="nombreArticulo" {...register('nombreArticulo',{ required: true})}/>
        <input type="submit" value="Checkear" />
      </form>
    </div>
  )
}

export default CheckArticuloPage
