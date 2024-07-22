import React from 'react'

const Line = ({items ,handleCheck,deleteItems}) => {
  return (
    <li className='list' key={items.id}>
                    <input className='input'
                    onChange={()=>handleCheck(items.id)}
                    type="checkbox"
                    checked={items.checked}
                     />
                    <label className='label' style={(items.checked) ?{textDecoration:'line-through'}:null} onDoubleClick={()=>handleCheck(items.id)} >{items.item}</label>
                    <button className='button' onClick={()=>deleteItems(items.id)}>Delete</button>
    </li>
  )
}

export default Line