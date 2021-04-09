import React from 'react';



const SearchBox = ({searchChange}) => {

    return(

        <div className="searchBox">
          <h2 align="center">Task List</h2>
          <input onChange={searchChange} type="text"  placeholder="search here "/>
         
        </div>


    )



}

export default SearchBox;