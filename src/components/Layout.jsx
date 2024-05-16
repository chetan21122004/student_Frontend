import React from 'react'
import Top from './top/Top'
import Middle from './middle/Middle'
import Footer from './footer/Footer'

function Layout({logout}) {
  const logou = logout
  return (
    <div className='h-screen  bg-gray-200'>
      <Top out={logou}/>
      <Middle/>
      <Footer/>
    </div>
  )
}

export default Layout