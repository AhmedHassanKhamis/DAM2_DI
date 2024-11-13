import { HistorialPedidoRequest } from "../api/cafeteria";
import { useLocation } from 'react-router-dom';



function CardsPedido() {
    const { state } = useLocation();
    const { nombreAlumno } = state;
    console.log(nombreAlumno)
    console.log("-------------------------------------")
    const listaPedidos = HistorialPedidoRequest(nombreAlumno);
    console.log(listaPedidos)
    console.log("-------------------------------------")
    // console.log(listaPedidos)

    // const listaPedidos = HistorialPedidoRequest;


    return (
      <div className='flex flex-col gap-5 flex-wrap mt-10 bg-yellow-100 md:flex-row'>
        {
          //USO UN BUCLE DE VARIABLES PARA GENERAR LOS DIVS
          // listaPedidos.data.map(
          //     pedido => 
           
          //     <div key={pedido._id} class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">
          //     <div class="shrink-0">
          //       <img class="size-12" src="data:image/png;base64,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" alt="ChitChat Logo"/>
          //     </div>
          //     <div>
          //       <div class="text-xl font-medium text-black">{pedido.nombreAlumno}</div>
          //       <p class="text-slate-500">{pedido.pedidosRealizados}</p>
          //     </div>
          //   </div>
          // )
          
        }
      </div>
    )
    
}


export default CardsPedido