import React from 'react';
import './styles.css';

export function Input({ transfer, name }) {
  return (
    <li className='filter__transfers-item'>
      <input className='filter__transfers-input' type='checkbox' id={transfer} name={transfer} />
      <label className='filter__transfers-input-label' htmlFor={transfer}>
        {name}
      </label>
      <button>Только</button>
    </li>
  );
}
