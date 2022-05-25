import React from 'react'
import './Newpost.css'
import sakura from '../../../Assets/cardAssets/sakura.jpg'
import{BsCameraVideo,BsEmojiSmile} from 'react-icons/bs';
import {GrGallery} from 'react-icons/gr'
const Newpost = () => {
  return (
    <div className='new_post_container'>
        <div className='input-image'>
            <img src={sakura} alt="profileimage" className='profile-img' />
            <input className='input' type="text" placeholder="what's on your mind,Digvijay ?" />
        </div>
        <hr className='Hr-line' />
        <div className='live_gallery_activity'>
            <div className='live'>
                <BsCameraVideo className='live-icon'/>
                <span>Go Live</span>
            </div>
            <div className='gallery'>
                <GrGallery className='gallery-icon'/>
                <span>Photo/video</span>
            </div>
            <div className='activity'>
                <BsEmojiSmile className='emoji-icon'/>
                <span>Feeling/Activity</span>
            </div>
        </div>
    </div>
        
  )
}

export default Newpost