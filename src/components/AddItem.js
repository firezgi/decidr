import "../App.css";
import React, { useState } from 'react';

function AddItem({listContainer,setListContainer}) {
    const[newItem,setNewItem]=useState("");
    const isDuplicated=( val) =>
        listContainer.some((arrVal)=>  val.toLowerCase() === arrVal.toLowerCase() )
    const checkInput = (event) => {
        event.preventDefault();
        if(newItem === " "){
            setListContainer([...listContainer])
             alert("Add input")
        }
        else if(newItem.length === 0){
            setListContainer([...listContainer])
             alert("Add input")
        }
        else if (newItem.length > 0) { 
            if(isDuplicated(newItem)){
                setListContainer([...listContainer])
                alert("Duplicated :Please enter another")
                setNewItem("")
            }
            else{
                setListContainer([...listContainer,newItem])
                setNewItem("")
            }
            
        } 
      };
    return (
        <form onSubmit={checkInput}  id="add-item">
            <input 
            value={newItem} 
            onChange={e=>setNewItem(e.target.value)}
            placeholder="Add an item"
            />
            <button id="submit-item" onClick={checkInput} type="submit" >Add Item</button>
            <div >
            
                </div>
        </form>
    )
}

export default AddItem
