import React from 'react'
import Search from './Search'

function Hero() {
  return (
    <div>
        <div className="flex flex-col items-center p-10 py-20 gap-4 h-[600px] w-full bg-[#eef0fc]">
            <h2 className='text-lg font-bold text-[50px]'>Discover the nearest store around you!</h2>
            <h2>Pharmacies, grocery stores, mobile money vendors, salons, car washes, any type of store you need to visit</h2>

            <Search />
        </div>
    </div>
  )
}

export default Hero