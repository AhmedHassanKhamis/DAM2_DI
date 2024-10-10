import React from 'react'

function App() {
  return (
    <div class="flex flex-col h-screen justify-center  drop-shadow">
      <form action="#" method="post" class="border-solid border-2 border-black p-5 w-fit self-center flex flex-col gap-1 -translate-y-1/2		">
        <h1 class="self-center text-xl ">Bienvendio</h1>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" class="border-solid border-2"/>

        <label htmlFor="contrasenia">Contraseña</label>
        <input type="password" name="contrasenia" id="contrasenia" class="border-solid border-2"/>

        <input type="submit" value="Acceder" name='Acceder' class="border-solid border-2 border-black mt-3 bg-blue-300  hover:bg-green-300 ease-in-out duration-700"/>
      </form>
      
    </div>
  )
}

export default App
