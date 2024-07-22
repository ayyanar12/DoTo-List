import React from 'react'
import Lengthchecking from './Lengthchecking'

const Content = ({list,handleCheck,deleteItems}) => {
    
  return (
    <>
        {(list.length)?(
            <Lengthchecking  
            list={list}
            handleCheck={handleCheck}
            deleteItems={deleteItems}/>
        ):(<p>your list is empty</p>)}
       
    </>
  )
}

export default Content