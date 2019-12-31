import React from 'react';

const ApartmentByCity = (apartment) => {
  return(
    <div>
    <h1> Apartments List </h1>
    <h5>Title: {apartment.title}</h5>
    <h5>Price: {apartment.price}</h5>
    </div>
  )
};
  

export default ApartmentByCity;
