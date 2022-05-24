import React from 'react'
import './Main.css'
import Leftbar from './Leftbar'
import Middlebar from './Middlebar'
import Rightbar from './Rightbar'


const Main = () => {
  return (
    <div className='main-container'>
        <Leftbar  />
        <Middlebar />
        <Rightbar />
    </div>
  )
}

export default Main