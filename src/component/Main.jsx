import React from 'react'
import destinations from '../destination'
import Footer from './Footer'
import Video from './Video'

const Main = ({price, setPrice, place, setPlace}) => {
  // console.log('price', price);
  // console.log('place', place);

  const onHandlePrice = (cost, tour) => {
      let totalPrice = cost + price;
      setPrice(totalPrice);
      setPlace([...place, tour]);
  }
  return (
    <div className='main'>
      <h4>Premium package</h4>
      <div className="row">
        {
          destinations.map((item)=>(
              <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card-body">
                      <h4 className='card-title'>{item.name}</h4>
                  </div>
                  <img src={item.url} alt='' />
                  <button className='price'>{item.day}Day: ${item.price}</button>
                  <button className='hero-btn btn-2' onClick={()=> onHandlePrice(item.price, item.name)}>Add</button>
              </div>
          ))
        }
      </div>
      <Video />
      <Footer />
    </div>
  )
}

export default Main
