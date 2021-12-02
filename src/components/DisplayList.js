import React, { useState } from 'react'
import "../App.css";
function DisplayList({listContainer,setListContainer}) {
    const deleteHandler=(ind)=> setListContainer( listContainer.filter((item,i) => i!==ind ))
    
    const displayList=listContainer.map((item,index)=>
        <div className="listWrap"key={index} >

        <li>{item}</li>
        <button onClick={()=>deleteHandler(index)}>delete</button>

        </div>    
        
    )
    return (
        <ol id="display-list">
            {displayList}
        </ol>
    )
}

export default DisplayList
