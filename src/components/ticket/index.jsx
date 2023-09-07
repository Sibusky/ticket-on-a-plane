import React, { useEffect, useState } from 'react';
import './styles.css';
import { convertPrice, formatTransfers } from '../../utils/utils';

export function Ticket({
  arrival_date,
  arrival_time,
  carrier,
  departure_date,
  departure_time,
  destination,
  destination_name,
  origin,
  origin_name,
  price,
  stops,
  currency,
}) {
  const [imageSrc, setImageSrc] = useState(null);

  // Use dynamic image upload
  useEffect(() => {
    import(`../../images/logos/${carrier.toLowerCase()}.png`)
      .then((imageModule) => {
        setImageSrc(imageModule.default);
      })
      .catch((error) => {
        console.error('Error loading image:', error);
      });
  }, [carrier]);

  return (
    <li className='tickets__item'>
      <div className='tickets__item-buy'>
        <div className='tickets__item-logo-wraper'>
          <img className='tickets__item-logo' alt={carrier} src={imageSrc} />
        </div>
        <button className='tickets__item-button'>
          <a
            className='tickets__item-link text'
            href='https://github.com/Sibusky'
            target='_blank'
            rel='noreferrer'
          >
            Купить
            <br />
            за {convertPrice(price, currency)}
          </a>
        </button>
      </div>
      <div className='tickets__item-info'>
        <div className='tickets__item-time'>
          <p className='tickets__item-time-value text'>{departure_time}</p>
          <div className='tickets__item-transfer'>
            <p className='tickets__item-transfer-counter text'>{formatTransfers(stops)}</p>
            <div className='tickets__item-plane-wraper'>
              <div className='tickets__item-line'></div>
              <div className='tickets__item-plane'>
                <svg xmlns='http://www.w3.org/2000/svg' width='313' height='305' viewBox='0 0 313 305'>
                  <path
                    fill='gray'
                    d='m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47'
                  />
                </svg>
              </div>
            </div>
          </div>
          <p className='tickets__item-time-value text'>{arrival_time}</p>
        </div>
        <div className='tickets__item-cities'>
          <div className='tickets__item-origin'>
            <p className='tickets__item-airport-name-origin tickets__item-airport-name text'>
              {origin}, {origin_name}
            </p>
            <p className='tickets__item-date text'>{departure_date}</p>
          </div>
          <div className='tickets__item-destination'>
            <p className='tickets__item-airport-name-destination tickets__item-airport-name text'>
              {destination_name}, {destination}
            </p>
            <p className='tickets__item-date text'>{arrival_date}</p>
          </div>
        </div>
        <div className='tickets__item-stops-wraper'>
          <p className='tickets__item-stops text'>{formatTransfers(stops)}</p>
          <div className='tickets__item-plane'>
            <svg xmlns='http://www.w3.org/2000/svg' width='313' height='305' viewBox='0 0 313 305'>
              <path
                fill='gray'
                d='m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47'
              />
            </svg>
          </div>
        </div>
      </div>
    </li>
  );
}
