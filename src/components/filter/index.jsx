import React, { useState } from 'react';
import './styles.css';
import { Button } from '../button';
import { Input } from '../input';
import { transfersMap } from './constants';

export function Filter() {

    // const [isOne, setIsOne] = useState(false);

    console.log(Object.entries(transfersMap))

  return (
    <div className='filter'>
      <div className='filter__currency'>
        <p className='filter__currency-title'>Валюта</p>
        <div className='filter__currency-selector'>
          <Button className='filter__curency-rub'>RUB</Button>
          <Button className='filter__curency-usd'>USD</Button>
          <Button className='filter__curency-eur'>EUR</Button>
        </div>
      </div>
      <form className='filter__transfers'>
        <fieldset className='filter__transfers-fieldset'>
          <legend className='filter__transfers-title'>Количество пересадок</legend>
          <ul className='filter__transfers-list'>


            {Object.entries(transfersMap).map(([transfer, transferName]) => <Input key={transfer} transfer={transfer} name={transferName}/>)}

            {/* <Input 
            /> */}

{/* <select
                className="employee__form-input form-input form-input-select text"
                value={role}
                onChange={handleChangeRole}
                id="role"
              >
                <option value="" disabled>
                  {CHOOSE_ROLE}
                </option>
                {Object.entries(rolesMap).map(([role, roleName]) => (
                  <option key={role} value={role}>
                    {roleName}
                  </option>
                ))}
              </select> */}


            {/* <li className='filter__transfers-item'>
              <input className='filter__transfers-input' type='checkbox' id='all' name='all' />
              <label className='filter__transfers-input-label' htmlFor='all'>
                Все
              </label>
            </li>
            <li className='filter__transfers-item'>
              <input className='filter__transfers-input' type='checkbox' id='without' name='without' />
              <label className='filter__transfers-input-label' htmlFor='without'>
                Без пересадок
              </label>
              <button>Только</button>
            </li>
            <li className='filter__transfers-item'>
              <input className='filter__transfers-input' type='checkbox' id='one' name='one' value={isOne} onChange={() => setIsOne(!isOne)} />
              <label className='filter__transfers-input-label' htmlFor='one'>
                1 пересадка
              </label>
            </li>
            <li className='filter__transfers-item'>
              <input className='filter__transfers-input' type='checkbox' id='two' name='two' />
              <label className='filter__transfers-input-label' htmlFor='two'>
                2 пересадки
              </label>
            </li>
            <li className='filter__transfers-item'>
              <input className='filter__transfers-input' type='checkbox' id='three' name='three' />
              <label className='filter__transfers-input-label' htmlFor='three'>
                3 пересадки
              </label>
            </li> */}
          </ul>
        </fieldset>
      </form>
    </div>
  );
}
