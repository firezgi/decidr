import React from 'react'

function DisplayList({listContainer}) {
    const displayList=listContainer.map((item,index)=>
        <li className="listItem" key={index}>{item}</li>
    )
    return (
        <div>
            {displayList}
        </div>
    )
}

export default DisplayList
