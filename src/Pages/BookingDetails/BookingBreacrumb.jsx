import React from 'react'

export const BookingBreacrumb = () => {
  return (
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="#">Turkey</a>
      </li>
      <li className="breadcrumb-item">
        <a href="#">Istanbul</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        CVK Park Bosphorus Hotel Istanbul
      </li>
    </ol>
  </nav>
  )
}
