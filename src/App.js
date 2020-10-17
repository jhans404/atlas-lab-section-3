import React from 'react';
import './App.css';
import Card from './components/Card.js';
import data from './atlas-of-remote-islands.js';

function App() {
  //console.log(data);
  let island1 = data.islands[0];
  let island2 = data.islands[1];
  let island3 = data.islands[2];
  let island4 = data.islands[3];
  let island5 = data.islands[4];

  console.log(island1.coords.lat);
  
  return (
    <div>
      <div className="container">
        <h1 className="section-title">Atlas of Remote Islands</h1>
      </div>
      
      <div className="container">
        <h2 className="section-title">Islands</h2>
        <ul className="cards">
          
            <Card name={island1.name} 
                description={island1.description} 
                img={island1.image} 
                coordinates={island1.coords}
            />

            <Card name={island2.name} 
                description={island2.description} 
                img={island2.image} 
                coordinates={island2.coords}
            />

            <Card name={island3.name} 
                description={island3.description} 
                img={island3.image} 
                coordinates={island3.coords}
            />

            <Card name={island4.name} 
                description={island4.description} 
                img={island4.image} 
                coordinates={island4.coords}
            />

            <Card name={island5.name} 
                description={island5.description} 
                img={island5.image} 
                coordinates={island5.coords}
            />
        </ul>
      </div>
    </div>
  );
}

export default App;
