import React from 'react'

function Practica1() {
    return (
        <div className='flex flex-col justify-center align-middle h-screen'>
            <div className='mx-auto bg-gray-500 grid grid-rows-3 grid-cols-4 gap-6 h-96 w-96 p-10 transform scale-100'>
                <div className='bg-green-500 col-span-4'></div>
                <div className='bg-green-500 row-span-2 col-span-2'></div>
                <div className='bg-green-500 col-span-2'></div>
                <div className='bg-green-500'></div>
                <div className='bg-green-500'></div>
            </div>
        </div>
    )
}

export default Practica1
