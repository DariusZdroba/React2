import React from 'react'

const SquareText = ({colorValue, setColorValue,isDark}) => {
  
 console.log({colorValue}) 
    return ( 
    <div className="square"
    >
        <p
        style={{
            backgroundColor: colorValue,
            color: isDark ? "#000" : '#FFF'

        }}
        >
        {colorValue ? colorValue : 'empty'} 
        
        </p>
    
    </div>
  )
}
 SquareText.defaultProps = {
    color: "empty color value"
 }
export default SquareText