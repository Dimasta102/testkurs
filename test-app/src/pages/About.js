// src/pages/About.js
import React from 'react';
import './About.css'; // Импортируем CSS файл для стилей

const About = () => {
  return (
    <div className="about"> {/* Используем класс для стилизации */}
      <h1>О компании Dream Cars</h1>
      <p>Мы предоставляем качественные автомобили для аренды с отличными условиями.</p>
      <h2>Наша миссия</h2>
      <p>Мы стремимся сделать вашу поездку комфортной и безопасной.</p>
      <h2>Почему выбирают нас?</h2>
      <ul className="about-list"> {/* Используем класс для списка */}
        <li>Широкий выбор автомобилей.</li>
        <li>Конкурентные цены.</li>
        <li>Отличное обслуживание клиентов.</li>
        <li>Простота оформления аренды.</li>
      </ul>
    </div>
  );
};

export default About;