import React from 'react'
import './featured.css';
const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src={require('./img/nai.jpg')} alt="" className='featuredImg'/>
            <div className="featuredTitle">
                <h1>Nairobi</h1>
                <h1>12 Properties</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={require('./img/nakuru.jpg')} alt=""  className='featuredImg'/> 
            <div className="featuredTitle">
                <h1>Nakuru</h1>
                <h1>16 Properties</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={require('./img/nairobi.jpg')} alt="" className='featuredImg'/>
            <div className="featuredTitle">
                <h1>Mombasa</h1>
                <h1>28 Properties</h1>
            </div>
        </div>
    </div>
  )
}

export default Featured
