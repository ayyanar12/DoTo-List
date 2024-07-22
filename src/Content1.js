import React, { useState } from 'react'

const Content = () => {
    const naming=["ayyanar","mani","Govindaraj"]
    const names=Math.floor(Math.random()*3)
    const [name,setName]=useState("ayya")
    const [count,setCount]=useState(27)
    function handleName(){
        setName(naming[names])
    }
    const handleChange=(e)=>{
        console.log(e.target.innerText)
        

    }
    function incrementFunction(){
        setCount(precount=>precount+1)

    }
    function decrementFunction(){
        setCount(precount=>precount+1)

    }
  return (
    <div>
        <p> hi {name} buddy</p>
        <button onClick={handleName}>changename</button>
        <button onClick={(e)=>handleChange(e)}>subscribe</button>
        <button onClick={incrementFunction}> +</button>
        <span>{count}</span>
        <button onClick={decrementFunction}>-</button>
    </div>
  )
}

export default Content