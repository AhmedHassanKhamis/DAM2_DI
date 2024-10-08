import React from 'react'

function App() {
  return (
    <div>
      <form action="#" method="post">
        <h1>Bienvendio</h1>

        <label htmlFor="">Email
            <input type="email" name="email" id="email" />
        </label>

        <label htmlFor="">Contraseña
            <input type="password" name="contrasenia" id="contrasenia" />
        </label>

        <input type="submit" value="" name='Enviar' />
      </form>
    </div>
  )
}

export default App
