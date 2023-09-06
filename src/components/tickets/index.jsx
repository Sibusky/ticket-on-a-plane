import React from 'react';
import './styles.css';
import { Ticket } from '../ticket';

export function Tickets({ tickets }) {
  return (
    <ul className='tickets'>
      {tickets.map((item) => (
        <Ticket
          arrival_date={item.arrival_date}
          arrival_time={item.arrival_time}
          carrier={item.carrier}
          departure_date={item.departure_date}
          departure_time={item.departure_time}
          destination={item.destination}
          destination_name={item.destination_name}
          origin={item.origin}
          origin_name={item.origin_name}
          price={item.price}
          stops={item.stops}
        />
      ))}
    </ul>
  );
}
