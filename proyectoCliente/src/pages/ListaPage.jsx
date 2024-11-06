import React from 'react'
import  { getUsuarios } from '../api/Auth.js'

function ListaPage() {
  const res = getUsuarios();
  return (
    <div>
      {
        res.data.map(
            usuario => 
            <div key={usuario._id}>
                <h1>{usuario.name}</h1>
            </div>
        )
        
      }
    </div>
  )
}

export default ListaPage
