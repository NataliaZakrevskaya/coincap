import React from 'react';
import PopularCryptocurrencies from './PopularCryptocurrencies/PopularCryptocurrencies';
import Portfolio from './Portfolio/Portfolio';

const Header = () => {
  return (
    <div>
      <PopularCryptocurrencies/>
      <Portfolio/>
    </div>
  );
};

export default Header;