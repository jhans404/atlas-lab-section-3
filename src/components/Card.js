import React from 'react';
import '../App.css';
import CardImage from './CardImage.js';
import CardInfo from './CardInfo.js';

function Card(props) {
  return(
    <li className="cards-item fourth">
      <div className="card">
        <div className="card-content">
            <CardImage img={props.img}/>
            <CardInfo 
                    name={props.name} 
                    description={props.description} 
                    coordinates={props.coordinates}
                />
        </div>
      </div>
    </li>
  );
}

export default Card;
