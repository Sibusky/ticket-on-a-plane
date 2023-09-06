import React, { useEffect, useState } from 'react';
import './styles.css';
import { Button } from '../button';
import { convertPrice } from '../../utils/utils';

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
        <img className='tickets__item-logo' alt={carrier} src={imageSrc} />
        <Button className='tickets__item-button'>Купить за {convertPrice(price, currency)}</Button>
      </div>
      <div className='tickets__item-info'>
        <div className='tickets__item-time'>
          <p className='tickets__item-time-departure'>{departure_time}</p>
          <div className='tickets__item-transfer'>
            <p className='tickets__item-transfer-counter'>{stops} пересадок</p>
            <div className='tickets__item-transfer-image'></div>
          </div>
          <p className='tickets__item-time-arrival'>{arrival_time}</p>
        </div>
        <div className='tickets__item-cities'>
          <div className='tickets__item-origin'>
            <p className='tickets__item-origin-name'>
              {origin}, {origin_name}
            </p>
            <p className='tickets__item-departure-date'>{departure_date}</p>
          </div>
          <div className='tickets__item-destination'>
            <p className='tickets__item-destination-name'>
              {destination_name}, {destination}
            </p>
            <p className='tickets__item-arrival-date'>{arrival_date}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
