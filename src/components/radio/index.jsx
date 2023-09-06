import React from 'react';
import './styles.css';

export function Radio({ currencyLabel, currentCurrency }) {
  const isChecked = currencyLabel === currentCurrency;

  return (
    <li className='filter__currency-item'>
      <input
        className='filter__currency-input'
        type='radio'
        id={currencyLabel}
        name='currency'
        value={currencyLabel}
      />
      <label className='filter__currency-label' htmlFor={currencyLabel}>
        <p className={`filter__currency-text${isChecked ? '_checked' : ''}`}>{currencyLabel.toUpperCase()}</p>
      </label>
    </li>
  );
}
