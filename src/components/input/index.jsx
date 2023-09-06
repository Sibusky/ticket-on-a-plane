import React, { useState } from 'react';
import './styles.css';

export function Input({ transfer, name, handleTransferFilter, selectedTransfers }) {
  const [isChecked, setIsChecked] = useState(selectedTransfers.includes(transfer));

  function handleChange() {
    setIsChecked(!isChecked);
    handleTransferFilter(transfer);
  }

  return (
    <li className='filter__transfers-item'>
      <input
        className='filter__transfers-input'
        type='checkbox'
        id={transfer}
        name={transfer}
        value={isChecked}
        onChange={handleChange}
      />
      <label className='filter__transfers-input-label' htmlFor={transfer}>
        {name}
      </label>
      <button>Только</button>
    </li>
  );
}
