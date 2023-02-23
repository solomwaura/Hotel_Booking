import React from 'react'
import useFetch from '../../hooks/useFetch';
import './favourites.css';

const Favourites = () => {
    const {data,loading} = useFetch("http://localhost:4550/api/hotels?featured=true&limit=3")
    console.log(data)
  return (
    <div className='favourites'>
        {loading ? ("Loading please some privacy") :(
        <>
        {data.map((item)=> (
        <div className="fItem" key={item._id}>
            <img src={require('./img/villa.jpg')} alt="" className="fImg" />
            <span className="fname">{item.name}</span>
            <span className="fcity">{item.city}</span>
            <span className="fprice">From: KSH.{item.cheapestPrice} <br/></span>
            <div className="fRating">
                <button>8.7</button>
                <span>Excellent</span>
            </div>
        </div>
        ))}
        </>
        )}

    </div>
  )
}

export default Favourites
