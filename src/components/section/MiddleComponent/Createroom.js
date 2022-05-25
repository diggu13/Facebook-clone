import React from 'react';
import './Createroom.css';
import {FaVideo} from 'react-icons/fa';
import spidey from '../../../Assets/cardAssets/spidey-x.jpg'
import sakura from '../../../Assets/cardAssets/sakura.jpg'
import wolvi from '../../../Assets/cardAssets/Wolvi.jpg'
import james from '../../../Assets/cardAssets/King.jpg'
const Createroom = () => {
  return (
    <div className='room-container'>
        <div className='video-icon'>
            <FaVideo className='v-icon' />
            <span>Create room</span>
        </div>
        <div className='image-slider'>
            <div>
            <img src={spidey} alt='room' className='image' />
            </div>
            <div>
            <img src={sakura} alt='room' className='image' />
            </div>
            <div>
            <img src={spidey} alt='room' className='image' />
            </div>
            <div>
            <img src={wolvi} alt='room' className='image' />
            </div>
            <div>
            <img src={spidey} alt='room' className='image' />
            </div>
            <div>
            <img src={sakura} alt='room' className='image' />
            </div>
            <div>
            <img src={spidey} alt='room' className='image' />
            </div>
            <div>
            <img src={james} alt='room' className='image' />
            </div>
            <div>
            <img src={spidey} alt='room' className='image' />
            </div>
            <div>
            <img src={spidey} alt='room' className='image' />
            </div>
            <div>
            <img src={spidey} alt='room' className='image' />
            </div><div>
            <img src={spidey} alt='room' className='image' />
            </div><div>
            <img src={spidey} alt='room' className='image' />
            </div><div>
            <img src={spidey} alt='room' className='image' />
            </div>
        </div>
    </div>
  )
}

export default Createroom