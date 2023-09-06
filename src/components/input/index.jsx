import React, { useEffect, useState } from 'react';
import './styles.css';

export function Input({ transfer, name, handleTransferFilter, selectedTransfers }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(selectedTransfers.includes(transfer));
  }, [selectedTransfers, transfer]);

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
        value={transfer}
        checked={isChecked}
        onChange={handleChange}
      />
      <label className='filter__transfers-input-label' htmlFor={transfer}>
        {name}
      </label>
      <button>Только</button>
    </li>
  );
}
