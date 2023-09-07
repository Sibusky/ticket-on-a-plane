import React from 'react';
import './styles.css';

export function Header() {
  return (
    <header className='header section'>
      <div className='header__container section__container'>
        <div className='header__logo'></div>
        <h1 className='header__title text'>AviaDetails. Все авиабилеты тут</h1>
      </div>
    </header>
  );
}
