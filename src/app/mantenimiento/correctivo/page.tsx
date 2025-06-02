import React from 'react'

export default function MantenimientoCorrectivo() {
  return (
    <div className='w-full flex flex-col items-center'>
        <p className='text-2xl'>Mantenimiento Correctivo</p>
        <div className='w-full flex'>
            <div className='w-1/2 '>
            <p className='text-1xl'>Correctivo</p>
            <div className='flex flex-col'>
                <label htmlFor="txtOrden">Nro de Orden:</label>
                <input type="text" id='txtOrden'/>
                <label htmlFor="txtFechaOden">Fecha de Orden:</label>
                <input type="date" />
                <label htmlFor="txtPedido">Pedido:</label>
                <select name="" id="">
                    <option value="">Opcion 1</option>
                    <option value="">Opcion 2</option>
                </select>
            </div> 
        </div>
        <div className='w-1/2'>

        </div>
        
        </div>
    </div>
  )
}
