import React from 'react'
import './Header.css'
import facebookLogo from '../../Assets/headerAssets/facebookIcon.png'
import profileImage from '../../Assets/headerAssets/sakura.jpg'
import {FaSistrix,FaHouseUser,FaDashcube,FaChessRook,FaGripHorizontal,FaFacebookMessenger,FaBell} from "react-icons/fa";
import {BsCollectionPlayFill,BsPeopleFill,BsCloudArrowUp} from "react-icons/bs";
const Header = () => {
  return (
    <div className='header-box'>
      <div className='icon-search-bar'>
        <a href='http://localhost:3000/'><img className='facebookLogo' src={facebookLogo} alt="logoimg"/></a>
        <div className='input-icon-box'>
          <FaSistrix className='search-icon' />
          <input type="search" className="search-input" placeholder='Search Facebook' />
        </div>
      </div>
      <div className='middle-icons'>
        <div className='first-icon-box'>
          <FaHouseUser className='middle-icon ' />
          <span></span>
        </div>
        <div className='first-icon-box'>
          <BsCollectionPlayFill className='middle-icon ' />
          <span className='icon-content'></span>
        </div>
        <div className='first-icon-box'>
          <BsPeopleFill className='middle-icon ' />
          <span className='icon-content'></span>
        </div> 
        <div className='first-icon-box'>
          <FaChessRook className='middle-icon ' />
          <span></span>
        </div> 
        <div className='first-icon-box'>
          <FaDashcube className='middle-icon ' />
          <span className='icon-content'></span>
        </div>

      </div>
      <div className='profile-and-icons'>
        <img src={profileImage} alt="profileImage" className='profile-img' />
        <span>Digvijay Rana</span>
        <FaGripHorizontal className='end-icons' />
        <FaFacebookMessenger className='end-icons'/>
        <FaBell className='end-icons'/>
        <BsCloudArrowUp className='end-icons'/>
      </div>
    </div>
  )
}

export default Header