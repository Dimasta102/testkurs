import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-text">
        <h2>Добро пожаловать!</h2>
        <p>
          Мы предлагаем аренду автомобилей на любой вкус и потребность.
          Прокатитесь по городу с комфортом, выбрав автомобиль из нашего автопарка.
        </p>
        <p>
          Мы обеспечим вам лучший сервис, высокое качество автомобилей и лучшие условия аренды.
        </p>
        <Link to="/fleet" className="explore-btn">Посмотреть автопарк</Link>
      </div>
    </section>
  );
}

export default Welcome;
