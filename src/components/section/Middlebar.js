import React from 'react'
import './Middlebar.css'
import Createroom from './MiddleComponent/Createroom'
import Newpost from './MiddleComponent/Newpost'
import Slider from './MiddleComponent/Slider'
import Post from './MiddleComponent/Post'

const Middlebar = () => {
  return (
    <div className='middle-container'>
        <Slider />
        <Newpost />
        <Createroom/>
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default Middlebar