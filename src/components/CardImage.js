import React from 'react';
import '../App.css';

function CardImage(props) {
  return(
    <div className="card-image" style={{backgroundImage: "url(" + props.img + ")"}}></div>
  );
}

export default CardImage;