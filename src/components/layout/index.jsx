import React from 'react';
import './styles.css'
import { Header } from '../header';
import { Footer } from '../footer';

export function Layout({ children, isFetching }) {
  return (
    <div className='layout'>
      <Header />
      {children}
      <Footer isFetching={isFetching} />
    </div>
  );
}
