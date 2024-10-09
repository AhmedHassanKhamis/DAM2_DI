import React from 'react'

function App() {
  return (
    <div>
      <form action="#" method="post" class="w-fit flex flex-col ">
        <h1 class="">Bienvendio</h1>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />


        <label htmlFor="contrasenia">Contraseña</label>
        <input type="password" name="contrasenia" id="contrasenia" />


        <input type="submit" value="Enviar" name='Enviar' />
      </form>
      
    </div>
  )
}

export default App
