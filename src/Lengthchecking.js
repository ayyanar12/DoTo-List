import React from 'react'
import Line from './Line'

const Lengthchecking = ({list,handleCheck,deleteItems}) => {
  return (
    <ul className='ulist' >
            {list.map((items) => (
                <Line
                items={items}
                key={items.id}
                handleCheck={handleCheck}
                deleteItems={deleteItems}/>
            ))}
        </ul>
  )
}

export default Lengthchecking