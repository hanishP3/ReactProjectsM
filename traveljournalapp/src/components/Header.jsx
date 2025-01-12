import React from 'react'
import Logo from '/src/assets/navlogo.svg'
function Header() {
  return (
    <nav className='flex justify-center gap-3 p-4 text-4xl items-center bg-[#f55a5a] shadow-lg text-white'>
        <img src={Logo} alt="logo" className=' h-[2em]  ' />
        <h1>Hanish's Travel Journal</h1>
    </nav>
  )
}

export default Header