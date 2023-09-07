import React, { useEffect, useState } from 'react';
import './styles.css';

export function Checkbox({ transfer, name, handleTransferFilter, selectedTransfers, handleButtonClick }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(selectedTransfers.includes(transfer));
  }, [selectedTransfers, transfer]);

  function handleChange() {
    setIsChecked(!isChecked);
    handleTransferFilter(transfer);
  }

  function handleClick(e) {
    e.preventDefault();
    handleButtonClick(transfer);
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
      <label className='filter__transfers-input-label text' htmlFor={transfer}>
        {name}
      </label>
      {isChecked && transfer !== 'all' && selectedTransfers.length !== 1 ? (
        <button className='filter__only-button text' onClick={handleClick}>
          Только
        </button>
      ) : null}
    </li>
  );
}
