import React from 'react';
import { Header } from '../header';
import { Footer } from '../footer';

export function Layout({ children }) {
  return (
    <div className='layout'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
