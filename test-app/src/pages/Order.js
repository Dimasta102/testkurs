// src/pages/Order.js
import React, { useState } from 'react';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    rentalDate: '',
    rentalTime: '',
    additionalRequests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику для обработки отправки формы
    console.log('Форма отправлена:', formData);
    // Очистка формы после отправки
    setFormData({
      name: '',
      email: '',
      phone: '',
      carModel: '',
      rentalDate: '',
      rentalTime: '',
      additionalRequests: '',
    });
  };

  return (
    <div>
      <h1>Оформление заказа</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Телефон:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="carModel">Модель автомобиля:</label>
          <input
            type="text"
            id="carModel"
            name="carModel"
            value={formData.carModel}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="rentalDate">Дата аренды:</label>
          <input
            type="date"
            id="rentalDate"
            name="rentalDate"
            value={formData.rentalDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="rentalTime">Время аренды:</label>
          <input
            type="time"
            id="rentalTime"
            name="rentalTime"
            value={formData.rentalTime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="additionalRequests">Дополнительные запросы:</label>
          <textarea
            id="additionalRequests"
            name="additionalRequests"
            value={formData.additionalRequests}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Отправить заказ</button>
      </form>
    </div>
  );
};

export default Order;