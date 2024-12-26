import React from 'react';
import CarSlider from '../components/CarSlider';
import { Link } from 'react-router-dom'

const Fleet = () => {
  const cars = [
    { name: 'BMW X5', category: 'Внедорожники', images: ['bmw-x5.jpeg', 'bmw-x5-2.jpeg', 'bmw-x5-3.jpeg'], price: '30 000 руб.' },
    { name: 'BMW M4', category: 'Купе', images: ['bmw-m4.jpeg', 'bmw-m4-2.jpeg', 'bmw-m4-3.jpeg'], price: '50 000 руб.' },
  ];

  return (
    <div>
      <h1>Наш автопарк</h1>
      {cars.map((car, index) => (
        <div key={index}>
          <h2>{car.category}</h2>
          <CarSlider images={car.images} />
          <Link to={"/order"}>
        <div className='fleetText'>
          <h3>{car.name}</h3>
          <p>Цена: {car.price}</p>
        </div>
        </Link>
        </div>
      ))}
    </div>
  );
};

export default Fleet;
