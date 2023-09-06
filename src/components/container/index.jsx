import React from 'react'
import './styles.css'

export default function Container({ children }) {
  return (
    <main className='main'>
        {children}
    </main>
  )
}
