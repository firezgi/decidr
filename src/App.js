import "./App.css";
import { useState } from "react";
import AddItem from "./components/AddItem";
import DisplayList from "./components/DisplayList";

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const selectItem = () => {
    const random = Math.floor(Math.random() * listContainer.length);
    if (listContainer.length <= 1) {
      setSelectedItem("");
      alert("The list must contain at least 2 items");
    } else if (listContainer.length > 1) {
      setSelectedItem(listContainer[random]);
    }
  };
  const deleteAllHandler = () =>
    setListContainer(listContainer.filter((item) => item !== item));
  return (
    <div className="App">
      <header className="App-header">Decidr</header>
      {listContainer.length ? (
        <p>Number of Items: {listContainer.length}</p>
      ) : (
        ""
      )}
      <AddItem
        listContainer={listContainer}
        setListContainer={setListContainer}
      />

      <main>
        <div>
          {listContainer.length < 2 && <h3>Please enter atleast two items</h3>}
        </div>
        <div>
          {selectedItem.length ? (
            <p className="selectedItem">{selectedItem}</p>
          ) : (
            <DisplayList
              listContainer={listContainer}
              setListContainer={setListContainer}
            />
          )}
        </div>
      </main>
      <footer>
        {listContainer.length > 0 && (
          <button onClick={() => deleteAllHandler()}>Clear list</button>
        )}
        <button id="footerbtn" onClick={selectItem}>
          Select an Item
        </button>
      </footer>
    </div>
  );
}

export default App;
