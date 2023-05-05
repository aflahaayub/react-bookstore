import React from 'react'
import styleClasses from './Input.module.css'
// id={props.input.id} => {...props.input}

const Input = React.forwardRef((props, ref)=>{
  console.log(props.label)
  return <div className = {styleClasses.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input ref={ref} {...props.input}/>
  </div>
})

export default Input