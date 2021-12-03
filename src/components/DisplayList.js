import React, { useState } from "react";
import "../App.css";
function DisplayList({ listContainer, setListContainer }) {
  const deleteHandler = (ind) =>
    setListContainer(listContainer.filter((item, i) => i !== ind));
  
  const displayList = listContainer.length
    ? listContainer.map((item, index) => (
        <div className="listWrap" key={index}>
          <div className="list">
            <p>{index + 1 + "."}</p>
            <p id="item">{item}</p>
          </div>
          <button id="listbtn"onClick={() => deleteHandler(index)}>delete</button>
        </div>
      ))
    : "";
  return (
    <div id="display-list">
      {displayList}
      
    </div>
  );
}

export default DisplayList;
