import React from 'react';
import Container from '../components/container';
import { Filter } from '../components/filter';
import { Tickets } from '../components/tickets';

export function Main({
  tickets,
  handleTransferFilter,
  selectedTransfers,
  transfersMap,
  handleButtonClick,
  currency,
  handleCurrencyChange,
  isFetching,
}) {
  return (
    <Container>
      <section className='content section'>
        <div className='content__container section__container'>
          <Filter
            handleTransferFilter={handleTransferFilter}
            selectedTransfers={selectedTransfers}
            transfersMap={transfersMap}
            handleButtonClick={handleButtonClick}
            handleCurrencyChange={handleCurrencyChange}
            currency={currency}
          />
          <Tickets tickets={tickets} currency={currency} isFetching={isFetching} />
        </div>
      </section>
    </Container>
  );
}
