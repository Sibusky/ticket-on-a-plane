import React from 'react';
import Container from '../components/container';
import { Filter } from '../components/filter';
import { Tickets } from '../components/tickets';

export function Main({ tickets, handleTransferFilter, selectedTransfers }) {
  return (
    <Container>
      <section className='content section'>
        <div className='content__container section__container'>
          <Filter handleTransferFilter={handleTransferFilter} selectedTransfers={selectedTransfers}/>
          <Tickets tickets={tickets}  />
        </div>
      </section>
    </Container>
  );
}
