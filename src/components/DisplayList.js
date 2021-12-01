import React from 'react'

function DisplayList({listContainer}) {
    const displayList=listContainer.map((item,index)=>
        <li className="listItem" key={index}>{item}</li>
    )
    return (
        <ol id="display-list">
            {displayList}
        </ol>
    )
}

export default DisplayList
