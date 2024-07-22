import React from 'react'

const Searchitem = ({search,setSearch}) => {
  return (
    <form  className="searcitem" onSubmit={(e)=>e.preventDefault()}>
      {/* <label htmlFor="searc">search</label> */}
      <input type="text" 
        id="search"
        role='serchbox'
        placeholder='search items'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}

       />
        
    </form>
  )
}

export default Searchitem