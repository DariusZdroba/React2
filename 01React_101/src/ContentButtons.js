import React from 'react'
import {useState} from 'react'
const Content = () =>{
const [name, setName] = useState('1');

const numberChange = () => {
  const numbers = [1, 2, 3];
  const int = Math.floor(Math.random() * 3);
  setName(numbers[int]);
}

const [count, setCount] = useState(0);
const handleClick = () =>{
  setCount(count + 1);
}

return(
<main>
<p> number {name}  {count}</p>
<button onClick = {numberChange}>change num</button>
<button onClick = {handleClick}> grownum</button>
</main>

); 
}




export default Content