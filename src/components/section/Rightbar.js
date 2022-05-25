import React from 'react'
import './Rightbar.css'
import flexxos from '../../Assets/AddAssets/Flexoss.jpg'
import zakir from '../../Assets/AddAssets/ZakireXO.jpg'
import {BsThreeDots,BsSearch,BsCameraVideo} from "react-icons/bs";
import {FaRegBell} from "react-icons/fa";
const Rightbar = () => {
  return (
    <div className='right-container'>
        <p>Sponsored</p>
        <div className='add-container-one'>
          <img src={flexxos} className='add-img-one' alt="img"/>
          <div>
            <p className='para-one'>Flexos on the way</p>
            <p className='para-two'>nft character</p>
          </div>
        </div>
        <div className='add-container-two'>
          <img src={zakir} className='add-img-two' alt="img"/>
        <div>
          <p className='para-one'>Zakir second character</p>
          <p className='para-two'>premiun nft character</p>
        </div>
      </div>
      <hr className='hr-line'></hr>
      <div>
        <div className='page-dot'>
          <a href='http://localhost:3000/Facebook-clone'>Your Pages</a>
          <BsThreeDots/>
        </div>
        <div className='pages'>
          <img src={flexxos} alt="page" className="page-image" />
          <span>Page one</span>
        </div>
        <div className='pages'>
          <FaRegBell className='notification' />
          <p>Notifications</p>
        </div>
      </div>
      <hr className='hr-line'></hr>
      <div className='contact'>
        <p>Contacts</p>
          <BsCameraVideo className='contact-icon'/>
          <BsSearch className='contact-icon' />
          <BsThreeDots className='contact-icon'/>
      </div>
      <div className='contact-list'>
        <a href='http://localhost:3000/Facebook-clone'><img className='contact-img'  alt="contact" src={zakir}/></a>
        <span>virender Singh</span>
      </div>
      <div className='contact-list'>
        <a href='http://localhost:3000/Facebook-clone'><img className='contact-img'  alt="contact" src={zakir}/></a>
        <span>virender Singh</span>
      </div>
      <div className='contact-list'>
        <a href='http://localhost:3000/Facebook-clone'><img className='contact-img'  alt="contact" src={zakir}/></a>
        <span>virender Singh</span>
      </div>
      <div className='contact-list'>
        <a href='http://localhost:3000/Facebook-clone'><img className='contact-img'  alt="contact" src={zakir}/></a>
        <span>virender Singh</span>
      </div>
      
  </div>
  )
}

export default Rightbar