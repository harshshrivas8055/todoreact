import React from 'react'

function Navbar() {
  return (
    <>
    <div className='flex justify-between bg-blue-400 font-bold font-sans text-white  '>
         <div className='font-extrabold font-sans text-2xl pl-5.5 ml-5.5'>
            T4-TODO
         </div>
          <ul className='flex gap-10 pr-5.5 mr-5.5 mt-1'>
            <li>HOME</li>
          </ul>
    </div>
     
    </>
  )
}

export default Navbar
