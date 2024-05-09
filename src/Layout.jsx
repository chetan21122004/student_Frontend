import React from 'react'
import Top from './components/top/Top'
import Middle from './components/middle/Middle'
import Footer from './components/footer/Footer'

function Layout() {
  return (
    <div className='h-screen p-1 bg-gray-200'>
      <Top/>
      <Middle/>
      <Footer/>
    </div>
  )
}

export default Layout