import React from 'react'
import { Outlet } from 'react-router-dom'

const Accomodations = () => {
  return (
    <div>
      <Outlet />
      <div className="flex justify-center items-center gap-2 px-6 py-2 bg-green-500 text-white rounded-full w-1/4 mx-auto mt-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
        <button className="btn btn-primary">Add Property</button>
      </div>
    </div>
  )
}

export default Accomodations
