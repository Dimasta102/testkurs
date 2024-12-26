import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Fleet from './pages/Fleet';
import RentalConditions from './pages/RentalConditions';
import About from './pages/About';
import SpecialOffers from './pages/SpecialOffers';
import Reviews from './pages/Reviews';
import Header from './components/Header';
import Footer from './components/Footer';
import Order from './pages/Order';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/rental-conditions" element={<RentalConditions />} />
          <Route path="/about" element={<About />} />
          <Route path="/special-offers" element={<SpecialOffers />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/order" element={<Order/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
