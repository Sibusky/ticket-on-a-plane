import React from 'react';
import './styles.css';

export function Tickets() {
  return (
    <ul className='tickets'>
      <li className='tickets__item'>
        <div className='tickets__item-buy'>
          <img className='tickets-item-logo' alt='company logo' src='#' />
          <button className='tickets-item-button'>Купить за 200 т.р.</button>
        </div>
        <div className='tickets__item-info'>
          <div className='tickets__item-time'>
            <p className='tickets__item-time-departure'>09:25</p>
            <div className='tickets__item-transfer'>
              <p className='tickets__item-transfer-counter'></p>
              <div className='tickets__item-transfer-image'></div>
            </div>
            <p className='tickets__item-time-arrival'>11:25</p>
          </div>
          <div className='tickets__item-cities'>
            <div className='tickets__item-departure'>
              <p className='tickets__item-departure-airport'>VVO, Владивосток</p>
              <p className='tickets__item-departure-date'>9 окт 2018, ПТ</p>
            </div>
            <div className='tickets__item-arrival'>
              <p className='tickets__item-arrival-airport'>Тель-Авив, TLV</p>
              <p className='tickets__item-arrival-date'>10 окт 2018, ПТ</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}
