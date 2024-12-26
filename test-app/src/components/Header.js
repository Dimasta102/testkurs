import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <header>
      <div className="header-background"></div>
      <div className="logo">
        Dream <span>Cars</span>
      </div>
      <nav>
        <ul>
          <li><a href="/">Главная</a></li>
          <li><a href="/fleet">Автопарк</a></li>
          <li><a href="/rental-conditions">Условия аренды</a></li>
          <li><a href="/about">О компании</a></li>
          <li><a href="/reviews">Отзывы</a></li>
          <li><a href="/order">Арендовать</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
