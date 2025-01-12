import React from 'react'

function Book(props) {
  return (
   <div className='ml-4'>
    <img src={props.imagesrc} alt="bookpng" className='h-[100%] w-[auto]' />
    <h2 className='font-bold text-base text-yellow-100'>{props.title}</h2>
    <h3 className='font-light text-yellow-50'>{props.author}</h3>
   </div>
  )
}

export default Book