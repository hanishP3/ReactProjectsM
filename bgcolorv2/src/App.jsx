import { useState } from 'react'


function App() {
  const [background, setbackground] = useState('grey')
  function setb(background){
    setbackground(background)
  }
  return (
    <> 
    <div className="main h-screen w-screen box-border flex flex-col justify-between text-center" style={{background:background}}>
      <h1 className='text-4xl mt-3'>Background changer</h1>
      <div className="btn mb-4 flex justify-center gap-6">
        <button className='red bg-red-600
        px-4 py-2 rounded-3xl 
        '
        onClick={()=>setb('red')}
        >Red</button>
        <button className='green
        bg-green-600 py-2 px-4 rounded-3xl
        'onClick={()=>setb('green')}
        >Green</button>
        <button className='blue
        bg-blue-600 px-4 py-2 
        rounded-3xl 
        'onClick={()=>setb('blue')}
        >Blue</button>
        <button className='purple
        bg-purple-600 px-4 py-2 
        rounded-3xl 
        'onClick={()=>setb('purple')}
        >Purple</button>
        <button className='orange
        bg-orange-600 px-4 py-2 
        rounded-3xl 
        'onClick={()=>setb('orange')}
        >Orange</button>
      </div>
    </div>
    </>
  )
}

export default App
