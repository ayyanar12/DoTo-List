import React from 'react'
import { useRef } from 'react'

const Additem = ({newItem,setNewItem,handleSubmitted}) => {
  const inputRef=useRef()
  return (
    <form  className="Additem" action="addItem" onSubmit={(e)=>handleSubmitted(e)} >
        {/* <label htmlFor="">AddItem</label> */}
        <input type="text"
        ref={inputRef}
          autoFocus id='addItem'
          required
          placeholder='enter the your activity'
          value={newItem}
          onChange={(e)=>setNewItem(e.target.value)}
        />
        <button type='submit' onClick={()=>inputRef.current.focus()}>add</button>
        
    </form>
  )
}

export default Additem