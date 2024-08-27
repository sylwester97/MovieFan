import { useState, useRef, useEffect } from 'react'

export function Search({ query, setQuery }) {
  const inputElement = useRef()

  useEffect(function () {
    inputElement.current.focus()
  }, [])
  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  )
}
