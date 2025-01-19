import React from 'react'
import logo from '../assets/logo.png'


function Navbar() {
  return (
    <div className='flex justify-center items-center gap-3 pt-3 border shadow-lg pb-4 rounded-sm'>
      <img src={logo} alt="logo" className='h-[3rem]' />
      <h1 className='font-semibold text-4xl'>Chef Cloud</h1>
    </div>
  )
}

export default Navbar