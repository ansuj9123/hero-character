import React, {useState} from 'react';
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);     
  const [superPower, setSuperPower] = useState("");
  const [displayCharacter, setDisplayCharacter]= useState(false)

  return (
    <div className="App">
      <h1>Build a Hero</h1>
      <div className='container'>
        <label>Name</label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age</label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Height</label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => {
            setHeight(event.target.value);
          }}
        />
        <label>SuperPower</label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => {
            setSuperPower(event.target.value);
          }}
        />
        {/* {name} {age} {height} {superPower} */}
      </div>
      <button className='display-button'
        onClick={() => {
          setDisplayCharacter(true);
        }}
        style={{ marginTop: 20 }}
      >
        Display Character
      </button>
      <div className='heroInfo-container'>
        <h2>Hero Info</h2>
        {displayCharacter && (
          <ul>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Height: {height}</li>
            <li>SuperPower: {superPower}</li>
            
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
