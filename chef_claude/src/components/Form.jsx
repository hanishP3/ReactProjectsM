import React, { useState } from 'react'

function Form() {

    const [Ingredients,SetIngredients] = useState([])

    const Ingredientslist = Ingredients.map((e)=>{
        return <li key={e}>{e}</li>
    })
    function handlesubmit(event){
        event.preventDefault()
        console.log('FORM IS SUBMMITTED')
        const formdata = new FormData(event.currentTarget)
        const newingredient = formdata.get('ingredient')
        console.log(newingredient)
        // Ingredients.push(newingredient)
        SetIngredients(previngredient => [...previngredient,newingredient])
        console.log(Ingredients)
        
        /**
         * currentTarget  is a property of the Event object, which is part of the standard JavaScript DOM API. React uses the SyntheticEvent system, which wraps the native browser events to provide a consistent interface, but currentTarget behaves the same way as in plain JavaScript.
         * The currentTarget property refers to the element on which the event listener is currently attached.
         */
    }
  return (
    <>
    <div className='flex justify-center items-center pt-8  ' >
        <form action=""  className='flex gap-4' 
        onSubmit={handlesubmit}
        >
            <input type="text" name='ingredient' placeholder='e.g. Oregano ' className='py-3 px-2
            border border-slate-400
            rounded-lg
             text-lg min-w-11 max-w-72 w-[18rem] 
            ' />
            <button className='bg-black text-white py-3 px-2 rounded-lg'>+ Add Ingredient</button>
        </form>
    </div>
    <ul>
        <li className='ml-3'>{Ingredientslist}</li>
    </ul>
    </>
  )
}

export default Form