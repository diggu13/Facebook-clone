import React from 'react'
import './Middlebar.css'
import Createroom from './MiddleComponent/Createroom'
import Newpost from './MiddleComponent/Newpost'
import Slider from './MiddleComponent/Slider'
const Middlebar = () => {
  return (
    <div className='middle-container'>
        <Slider />
        <Newpost />
        <Createroom/>
    </div>
  )
}

export default Middlebar