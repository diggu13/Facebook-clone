import React from 'react'
import './Leftbar.css'
import profileImage from '../../Assets/headerAssets/sakura.jpg'
import {FaUserFriends,FaPeopleArrows,FaRegBuilding,FaPlayCircle,FaClock} from "react-icons/fa";
const Leftbar = () => {
  return (
    <div className='left-container'>
        <div className='profile-name'>
          <a href='http://localhost:3000/Facebook-clone'><img src={profileImage} className='profile-image' alt='profile-img' /></a>
          <span>Digvijay Rana</span>
        </div>
        <div className='icon-block'>
          <a href='http://localhost:3000/Facebook-clone'>{<FaUserFriends className='icons' />}</a>
          <span>Friends</span>
        </div>
        <div className='icon-block'>
          <a href='http://localhost:3000/Facebook-clone'>{<FaPeopleArrows className='icons' />}</a>
          <span>Groups</span>
        </div>
        <div className='icon-block'>
          <a href='http://localhost:3000/Facebook-clone'>{<FaRegBuilding className='icons' />}</a>
          <span>Marketplace</span>
        </div>
        <div className='icon-block'>
          <a href='http://localhost:3000/Facebook-clone'>{<FaPlayCircle className='icons' />}</a>
          <span>Watch</span>
        </div>
        <div className='icon-block'>
          <a href='http://localhost:3000/Facebook-clone'>{<FaClock className='icons' />}</a>
          <span>Memories</span>
        </div>
    </div>
  )
}

export default Leftbar