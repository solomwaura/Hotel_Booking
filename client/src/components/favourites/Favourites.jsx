import React from 'react'
import './favourites.css';

const Favourites = () => {
  return (
    <div className='favourites'>
        <div className="fItem">
            <img src={require('./img/villa.jpg')} alt="" className="fImg" />
            <span className="fname">Hilton Hotel</span>
            <span className="fcity">Nairobi</span>
            <span className="fprice">From: KSH.15,000</span>
            <div className="fRating">
                <button>8.5</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fItem">
            <img src={require('./img/hotel.jpg')} alt="" className="fImg" />
            <span className="fname">Sandy Beach Hotel</span>
            <span className="fcity">Mombasa</span>
            <span className="fprice">From: KSH.19,000</span>
            <div className="fRating">
                <button>8.7</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fItem">
            <img src={require('./img/resort.jpg')} alt="" className="fImg" />
            <span className="fname">Serena Hotel</span>
            <span className="fcity">Nakuru</span>
            <span className="fprice">From: KSH.12,000</span>
            <div className="fRating">
                <button>8.3</button>
                <span>Excellent</span>
            </div>
        </div>

    </div>
  )
}

export default Favourites
