import React from 'react'

const randomNum = () => {
const randomContent = ['1', '2', '3'];
const rnd = Math.floor(Math.random() * 3);
return randomContent[rnd];
};

function header(props) {
  return (
    <header>
         <h1> {props.title} {randomNum()}</h1>
        </header>
  )
}
header.defaultProps = {
  title: "Default"
}
export default header