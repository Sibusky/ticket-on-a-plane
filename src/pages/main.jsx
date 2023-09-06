import React from 'react';
import Container from '../components/container';
import { Filter } from '../components/filter';
import { Tickets } from '../components/tickets';

export function Main() {
  return (
    <Container>
      <section className='content section'>
        <div className='content__container section__container'>
          <Filter />
          <Tickets />
        </div>
      </section>
    </Container>
  );
}
