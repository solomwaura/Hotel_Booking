import React from 'react';
import './search.css';

const SearchItem = () => {
  return (
    <div className='SearchItems'>
        <div className="searchItem">
            <img src={require('./img/mombasa.jpg')} alt="" className='srImg'/>
        
            <div className="srDesc">
                <h3 className="srTitle">Serena Hotels</h3>
                <span className="srDistance">1Km from CBD</span>
                <span className="srTaxiOption">Free Airport Taxi</span>
                <span className="srSubTitle">5 Star Hotel</span>
                <span className="srFeatures">1 Hot Tab, Balcony, Tv room</span>
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
                    <span className="srPrice">KSH.15,000</span>
                    <span className="srTaxOption">Includes taxes and Fees</span>
                    <button className="availability">See Availability</button>
                </div>
            </div>
        </div>
        <div className="searchItem">
            <img src={require('./img/mombasa.jpg')} alt="" className='srImg'/>
        
            <div className="srDesc">
                <h3 className="srTitle">Serena Hotels</h3>
                <span className="srDistance">1Km from CBD</span>
                <span className="srTaxiOption">Free Airport Taxi</span>
                <span className="srSubTitle">5 Star Hotel</span>
                <span className="srFeatures">1 Hot Tab, Balcony, Tv room</span>
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
                    <span className="srPrice">KSH.15,000</span>
                    <span className="srTaxOption">Includes taxes and Fees</span>
                    <button className="availability">See Availability</button>
                </div>
            </div>
        </div>
        <div className="searchItem">
            <img src={require('./img/mombasa.jpg')} alt="" className='srImg'/>
        
            <div className="srDesc">
                <h3 className="srTitle">Serena Hotels</h3>
                <span className="srDistance">1Km from CBD</span>
                <span className="srTaxiOption">Free Airport Taxi</span>
                <span className="srSubTitle">5 Star Hotel</span>
                <span className="srFeatures">1 Hot Tab, Balcony, Tv room</span>
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
                    <span className="srPrice">KSH.15,000</span>
                    <span className="srTaxOption">Includes taxes and Fees</span>
                    <button className="availability">See Availability</button>
                </div>
            </div>
        </div>
        <div className="searchItem">
            <img src={require('./img/mombasa.jpg')} alt="" className='srImg'/>
        
            <div className="srDesc">
                <h3 className="srTitle">Serena Hotels</h3>
                <span className="srDistance">1Km from CBD</span>
                <span className="srTaxiOption">Free Airport Taxi</span>
                <span className="srSubTitle">5 Star Hotel</span>
                <span className="srFeatures">1 Hot Tab, Balcony, Tv room</span>
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
                    <span className="srPrice">KSH.15,000</span>
                    <span className="srTaxOption">Includes taxes and Fees</span>
                    <button className="availability">See Availability</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchItem
