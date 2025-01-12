import React from 'react'

function Footer() {
  return (
    <div className='text-center font-semibold
    mt-5 bg-green-700 text-2xl 
    '>
        <h3 className='mb-5 pt-5'>Feel Free to reach me out!!</h3>
        <ul className='flex justify-center gap-10 b pb-1'>
            <li><a href="https://x.com/hanish1dev" target="_blank" rel="noopener noreferrer" className='
            hover:underline text-gray-100 '>Twitter</a></li>
            <li><a href="https://github.com/hanishP3" target="_blank" rel="noopener noreferrer" className='
            hover:underline text-gray-100 '>GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/hanish-p-03h/" target="_blank" rel="noopener noreferrer" className='
            hover:underline text-gray-100 '>Linkedin</a></li>
        </ul>
    </div>
  )
}

export default Footer