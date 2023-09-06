import React from 'react';
import Container from '../components/container';
import { Filter } from '../components/filter';
import { Tickets } from '../components/tickets';

export function Main({ tickets, handleTransferFilter, selectedTransfers, transfersMap, handleButtonClick }) {
  return (
    <Container>
      <section className='content section'>
        <div className='content__container section__container'>
          <Filter handleTransferFilter={handleTransferFilter} selectedTransfers={selectedTransfers} transfersMap={transfersMap} handleButtonClick={handleButtonClick}/>
          <Tickets tickets={tickets}  />
        </div>
      </section>
    </Container>
  );
}
