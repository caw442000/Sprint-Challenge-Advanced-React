import React from 'react';

const Card = props => {
  //destructuring the prop elements
  const { name, country, searches } = props.player;

  return (

    <div>

      <h3>{name}</h3>
      <h4>Country: {country}</h4>
      <h4>Number of Searches: {searches}</h4>


    </div>


  );



};

export default Card;