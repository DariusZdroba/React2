import React from 'react'

const TypeColor = ({colorValue, setColorValue, isDark, setIsDark}) => {
  return (
    <form className="colorForm"
    onSubmit={(e)=> e.preventDefault()}>
     <label>Add Color Name</label>
     <input 
     type="text"
     required
     autoFocus
     placeholder="Add color name"
     value={colorValue}
     onChange={(e)=> setColorValue(e.target.value)}
     />
        <button
        type="button"
        onClick={()=> setIsDark(!isDark)} >
            Toggle Text Color
        </button>
    </form>
  )
}

export default TypeColor