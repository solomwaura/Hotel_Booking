import React from 'react';
import { Link } from 'react-router-dom';
import './search.css';

const SearchItem = ({item}) => {
  return (
    <div className='SearchItems'>
        <div className="searchItem">
            <img src={require('./img/mombasa.jpg')} alt="" className='srImg'/>
        
            <div className="srDesc">
                <h3 className="srTitle">{item.name}</h3>
                <span className="srDistance">{item.distance}</span>
                <span className="srTaxiOption">Free Airport Taxi</span>
                <span className="srSubTitle">5 Star Hotel</span>
                <span className="srFeatures">{item.desc}</span>
                {/* <span className="srCancelOption">Free Cancellation</span> */}
                {/* <span className="srCancelOptionSubTitle">
                    You can cancle later, so lock this great deal today!
                </span> */}
            </div>
            <div className="srDetails">
                <div className="srRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="srDetailsTexts">
                    <span className="srPrice">KSH.{item.cheapestPrice}</span>
                    <span className="srTaxOption">Includes taxes and Fees</span>
                    <Link to={`/hotels/${item._id}`}>
                    <button className="availability">See Availability</button>
                    </Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default SearchItem
