import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Main from './Main'
import Billing from './Billing'

const Pages = () => {
  const [price, setPrice] = useState(0)
  const [place, setPlace] = useState([])

  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/travel' element={<Main price={price} setPrice={setPrice} place={place} setPlace={setPlace} />} />
        <Route path='/pricing' element={<Billing price={price} place={place}  />}  />
    </Routes>
  )
}

export default Pages
