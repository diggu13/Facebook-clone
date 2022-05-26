import sakura from '../../../Assets/cardAssets/sakura.jpg'
import React from 'react'
import './Post.css'
import {BsThreeDots} from 'react-icons/bs';
import {GiEarthAmerica} from 'react-icons/gi';
const Post = () => {
  return (
    <div className='post-container'>
      <div className='post-container-box'>
        <img src={sakura} alt="post-img" className='post-img'/>
        <div className='name-content'>
          <span><strong>Miami Florida</strong></span>
          <div className='time-earth'>
            <span>Beach house </span>
            <span>2 hrs</span>
            <GiEarthAmerica className='earth-icon'/>
          </div>
        </div>
        <BsThreeDots className='dots'/>
      </div>
      <p className='caption'>Need no Caption ❤️👽</p>
      <img src={sakura} alt="sakukra" className="sakura" />
      <hr className='hrr-line'/>
      <div className='like-comment-share'>
        <a href='http://localhost:3000/Facebook-clone'>Like</a>
        <a href='http://localhost:3000/Facebook-clone'>Comment</a>
        <a href='http://localhost:3000/Facebook-clone'>Share</a>
      </div>
    </div>
  )
}

export default Post