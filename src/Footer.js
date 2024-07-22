import React from 'react'

const Footer = ({length}) => {
  return (
    <div className='footer'> {length}{length===1?"item":"items"}</div>
  )
}

export default Footer