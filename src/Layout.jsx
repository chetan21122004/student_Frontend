import React from 'react'
import Top from './components/top/Top'
import Middle from './components/middle/Middle'
import Footer from './components/footer/Footer'

function Layout({logout}) {
  const logou = logout
  return (
    <div className='h-screen p-1 bg-gray-200'>
      <Top out={logou}/>
      <Middle/>
      <Footer/>
    </div>
  )
}

export default Layout