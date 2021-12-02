// import './AddItem.css';
import "../App.css";
import React, { useState } from 'react';

function AddItem({listContainer,setListContainer}) {
    const[newItem,setNewItem]=useState("");
    const formSubmit=(event)=>{
        event.preventDefault();
        setListContainer([...listContainer,newItem])
        setNewItem("")
        
    }
    return (
        <form onSubmit={formSubmit}  id="add-item">
            <input 
            value={newItem} 
            onChange={e=>setNewItem(e.target.value)}
            placeholder="Add an item"
            />
            <button id="submit-item" onClick={formSubmit} type="submit" >Add Item</button>
            <div >
            
                </div>
        </form>
    )
}

export default AddItem
