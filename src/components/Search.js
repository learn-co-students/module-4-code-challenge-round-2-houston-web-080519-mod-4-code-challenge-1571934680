import React from 'react'

const Search = (props) => {
  return (
    <div className="sixteen wide column ui fluid category search">
      <div className="fluid ui icon input"
       
        >
        <input type="text" placeholder="Search transactions..." 
         onChange={(e)=>props.handleChange(e.target.value)}/>
        <i className="search icon"></i>
      </div>
    </div>
  )
}

export default Search
