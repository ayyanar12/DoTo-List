import React from 'react'

const Header = (props) => {
  return (
    <div className='header' style={{color:"white",backgroundColor:"blue"}}>{props.title}</div>
  )
}


export default Header 