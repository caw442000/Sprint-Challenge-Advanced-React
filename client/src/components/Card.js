import React from 'react';

const Card = props => {
  //destructuring the prop elements
  const { name, country, searches, id } = props.player;

  const ranking = (id + 1);

  return (

    <div className="card"> 

      <h3>Name: {name}</h3>
      <h4>Country: {country}</h4>
      <h4>Number of Searches: {searches}</h4>
      <h4>Ranking: {ranking}</h4>


    </div>


  );



};

export default Card;