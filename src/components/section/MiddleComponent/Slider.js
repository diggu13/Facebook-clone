import React from 'react'
import spidey from '../../../Assets/cardAssets/spidey-x.jpg'
import sakura from '../../../Assets/cardAssets/sakura.jpg'
import wolvi from '../../../Assets/cardAssets/Wolvi.jpg'
import james from '../../../Assets/cardAssets/King.jpg'
import {BsFillPatchPlusFill} from "react-icons/bs";
import './Slider.css'

const Slider = () => {
  return (
    <div className='card-component'>
        <div className='card'>
            <img src={spidey} className="card-img" alt="card-img" />   
            <BsFillPatchPlusFill className='card-icon'/>
            <p className='add-story-p'>Create Story</p>
        </div>
        <div className='card'>
            <img src={sakura} className="story-img" alt="card-img" />   
            <p className='story-p'>Sakura</p>
        </div>
        <div className='card'>
            <img src={james} className="story-img" alt="card-img" />   
            <p className='story-p'>King james</p>
        </div>
        <div className='card'>
            <img src={wolvi} className="story-img" alt="card-img" />   
            <p className='story-p'>Wolvi</p>
        </div>
        <div className='card'>
            <img src={spidey} className="story-img" alt="card-img" />   
            <p className='story-p'>Spidey</p>
        </div>
        <div className='card'>
            <img src={james} className="story-img" alt="card-img" />   
            <p className='story-p'>King james</p>
        </div>
        <div className='card'>
            <img src={spidey} className="story-img" alt="card-img" />   
            <p className='story-p'>spidey</p>
        </div>
        <div className='card'>
            <img src={spidey} className="story-img" alt="card-img" />   
            <p className='story-p'>spidey</p>
        </div>
    </div>
  )
}

export default Slider