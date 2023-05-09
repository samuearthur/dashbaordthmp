import React from 'react'
import {data} from '../data/data.js'
import {FaShoppingBag} from 'react-icons/fa'
import { list } from 'postcss'


const RecentOrders = () => {
  return (
    <div className='w-full col-span-1 lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1>Recent Orders</h1>
      <ul>
        {data.map((order, id) => (
          <li keys={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
              <div className='bg-purple-100 rounded-lg p-3'> <FaShoppingBag className='text-purple-800'/></div>
              <div className='pl-4'>
                <p className='text-gray-800 font-bold'>Gh {order.total}</p>
                <p>{order.name.first}</p>
              </div>
              <p className='lg:flex md:hidden absolute right-6 text-sm'>
                {order.date}
              </p>
          </li>

        ))}
      </ul>
    </div>
  )
}

export default RecentOrders