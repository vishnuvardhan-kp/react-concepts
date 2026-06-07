import React, {useState} from 'react';

function App() {
  const [fruits,setFruit] = useState(["Apple", "Banana", "Grape"]);
  const addFood = () => {
    const newItem = document.getElementById("element").value;
    document.getElementById("element").value = "";
    setFruit(f => [...f,newItem]);
  }
  const remove = (index) => {
    setFruit(fruits.filter((_,i) => i!==index))
  }
  return (
    <>
    <h2>Fruits List</h2>
    <ul>
      {fruits.map((f,i) => 
        <li key={i} onClick={() => remove(i)}>{f}</li>
      )}
    </ul>
    <input type="text" id="element"/>
    <button onClick={addFood}>Add Fruit</button>
    </>
  );
}

export default App
