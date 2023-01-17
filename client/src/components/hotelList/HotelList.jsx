import React from 'react'
import './hotelList.css';

const HotelList = () => {
  return (
    <div className='hList'>
        <div className="hListItem">
            <img src={require('./img/hotel.jpg')} alt="" className='hListImg'/>
            <div className="hListTitle">
                <h2>Hotels</h2>
                <h4>223 Hotels  </h4>
            </div>
        </div>
        <div className="hListItem">
            <img src={require('./img/resort.jpg')} alt="" className='hListImg'/>
            <div className="hListTitle">
                <h2>Resorts</h2>
                <h4>223 Resorts  </h4>
            </div>
        </div>
        <div className="hListItem">
            <img src={require('./img/villa.jpg')} alt="" className='hListImg'/>
            <div className="hListTitle">
                <h2>Villas</h2>
                <h4>223 Villas  </h4>
            </div>
        </div>
    </div>
  )
}

export default HotelList;
