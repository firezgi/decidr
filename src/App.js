import "./App.css";
import { useState } from "react";
import AddItem from "./components/AddItem";
import DisplayList from "./components/DisplayList";

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const selectItem = () => {
    const random = Math.floor(Math.random() * listContainer.length);
    if(listContainer.length <=1){
      setSelectedItem("");
      alert("The list must contain at least 2 items")
    }
    else if(listContainer.length >1){
      setSelectedItem(listContainer[random]);
    }
  };
  return (
    <div className="App">
      <header className="App-header">Decidr</header>
      {listContainer.length?<p>Number of Items: {listContainer.length}</p>:""}
  

      <main>
        <AddItem
          listContainer={listContainer}
          setListContainer={setListContainer}
        />
        <div >
          {selectedItem.length ? (
            <p className="selectedItem">{selectedItem}</p>
          ) : (
            <DisplayList 
            listContainer={listContainer}
            setListContainer={setListContainer} />
          )}
        </div>
      </main>
      <footer>
      <button onClick={selectItem}>Select an Item</button>
      </footer>
    </div>
  );
}

export default App;
