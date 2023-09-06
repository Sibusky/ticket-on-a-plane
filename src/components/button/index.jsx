import React from 'react'

export function Button({ children, isDisabled }) {
  return (
    <button disabled={isDisabled}>{children}</button>
  )
}
