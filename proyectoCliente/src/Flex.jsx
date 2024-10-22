import React from 'react'

function Flex() {
  return (
    <div className='flex flex-col justify-center align-middle h-screen '>
      <dir className="container flex justify-center m-auto bg-slate-500 h-40 gap-40 hover:origin-center hover:rotate-90 hover:justify-end hover:gap-0 hover:transition-all ease-in-out duration-700">
        <div className='p-4 m-3 font-miFuente bg-amarilloOro'>hola</div>
        <div className='p-4 m-3 bg-green-500'>2</div>
        <div className='p-4 m-3 bg-green-500'>3</div>
        <div className='p-4 m-3 bg-green-500'>4</div>
      </dir>
    </div>
  )
}

export default Flex
