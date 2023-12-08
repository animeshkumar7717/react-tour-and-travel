import React from 'react'

const Billing = ({ price,place }) => {
  console.log('price in billing', price);
  return (
    <div className='pricing-1'>
      <h1>Trips</h1>
      <h2 className="card-title">Cost: ${price}</h2>
      <ul>
        {
          place.map((item)=>(
            <ul>
              <li>{item}</li>
            </ul>
          ))
        }
      </ul>
    </div>
  )
}

export default Billing
