import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'

const Home = () => {
  return (
      <div>
          <Navbar />
          <div className='p-4 '>
          <Header />
          </div>
    </div>
  )
}

export default Home
