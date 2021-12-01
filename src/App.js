import './App.css';
import { useState } from 'react';
import AddItem from './components/AddItem';
import DisplayList from './components/DisplayList';

function App() {
  const [listContainer,setListContainer]=useState([]);
  const [selectedItem,setSelectedItem]=useState("");
  const selectItem=()=>{
    const random=Math.floor(Math.random()*listContainer.length);
    setSelectedItem(listContainer[random]);
  }
  return (
    <div className="App">
      <header className="App-header">Decidr</header>


      <AddItem
      listContainer={listContainer} 
      setListContainer={setListContainer} />
      <DisplayList listContainer={listContainer}/>
      <div className="selectedItem">
      {selectedItem}
      </div>
      <button onClick={selectItem}>Select an Item</button>
      
      
      
    </div>
  );
}

export default App;
