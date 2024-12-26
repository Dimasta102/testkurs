// src/pages/RentalConditions.js
import React from 'react';
import './RentalConditions.css'; // Импортируем CSS файл для стилей

const RentalConditions = () => {
  return (
    <div className="rental-conditions">
      <h1>Условия аренды</h1>
      <p>Пожалуйста, ознакомьтесь с условиями аренды автомобилей:</p>
      <ul className="conditions-list">
        <li>Документ, удостоверяющий личность.</li>
        <li>Возраст от 21 года.</li>
        <li>Гарантийный депозит.</li>
        <li>Страхование автомобиля.</li>
        <li>Заполнение договора аренды.</li>
      </ul>
      <p>Если у вас есть вопросы, пожалуйста, свяжитесь с нами.</p>
    </div>
  );
};

export default RentalConditions;