import React from 'react';
import CarCard from '../components/CarCard';
import Welcome from '../components/Welcome';

const Home = () => {
  return (
    <div>
        <Welcome/>
      <section>
        <h2>Популярные автомобили</h2>
        <div className="car-list">
          <CarCard carName="BMW X5" price="30 000 руб." image="bmw-x5.jpeg" />
          <CarCard carName="BMW M4" price="50 000 руб." image="bmw-m4.jpeg" />
        </div>
      </section>
    </div>
  );
};

export default Home;
