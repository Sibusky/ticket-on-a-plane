import React from 'react';
import Container from '../components/container';
import { Filter } from '../components/filter';
import { Tickets } from '../components/tickets';

export function Main({ tickets }) {
  return (
    <Container>
      <section className='content section'>
        <div className='content__container section__container'>
          <Filter />
          <Tickets tickets={tickets}/>
        </div>
      </section>
    </Container>
  );
}
