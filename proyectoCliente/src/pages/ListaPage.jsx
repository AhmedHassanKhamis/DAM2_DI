import  { getUsuarios } from '../api/Auth.js'

function ListaPage() {
  //LLAMO A LA FUNCION CREADA EN MI API PARA GUARDARME LOS USUARIOS
  const listaUsuarios = getUsuarios;
  return (
    <div className='flex flex-col gap-5 flex-wrap mt-10 md:flex-row'>
      {
        //USO UN BUCLE DE VARIABLES PARA GENERAR LOS DIVS
        listaUsuarios.data.map(
            usuario => 
         
            <div key={usuario._id} class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">
            <div class="shrink-0">
              <img class="size-12" src="https://cdn-icons-png.flaticon.com/128/8932/8932030.png" alt="ChitChat Logo"/>
            </div>
            <div>
              <div class="text-xl font-medium text-black">{usuario.username}</div>
              <p class="text-slate-500">{usuario.email}</p>
            </div>
          </div>
        )
        
      }
    </div>
  )
}

export default ListaPage
