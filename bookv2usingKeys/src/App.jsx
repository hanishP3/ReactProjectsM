import React from 'react'
import Book from './Book'
import coverImage from './book_covers/mastering react.svg';
import practical from './book_covers/practical react.svg'
import reactaction from './book_covers/react in action.svg'
function App() {
  return (
    <div >
      <h1 className='text-4xl text-blue-600 font-bold text-center'>Favorite Books</h1>
      <div className='flex gap-11 flex-wrap mt-4 justify-center'>
      <Book title='Mastering React' author='By Hanish' imagesrc ={coverImage} ></Book>
      <Book title='Practical React' author='By Leohan' imagesrc ={practical} ></Book>
      <Book title='React In Action' author='By Leo' imagesrc ={reactaction} ></Book>

    </div>
    </div>
  )
}

export default App