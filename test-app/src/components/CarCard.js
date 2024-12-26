import React from 'react';
import { Link } from 'react-router-dom'

const CarCard = ({ carName, price, image }) => {
  return (
    <Link to={"/order"}>
    <div className="car-card">
      <img src={`/assets/images/${image}`} alt={carName} />
      <h3>{carName}</h3>
      <p>Цена: {price}</p>
    </div>
    </Link>
  );
};

export default CarCard;
