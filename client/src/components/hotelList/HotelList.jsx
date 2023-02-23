import React from 'react'
import useFetch from '../../hooks/useFetch';
import './hotelList.css';

const HotelList = () => {
    const {data,loading} = useFetch("http://localhost:4550/api/hotels/countByType")
    console.log(data);

    const images = [
        require('./img/hotel.jpg'),
        require('./img/resort.jpg'),
        require('./img/villa.jpg')
    ]

  return (
    <div className='hList' >
        { loading ?(
        "loading"):(
        <>
            {data 
            && images.map((img,i)=>(

            <div className="hListItem" key={i}>
                <img src={img} alt="" className='hListImg'/>
                <div className="hListTitle">
                    <h2>{data[i]?.type}</h2>
                    <h4>{data[i]?.count} {data[i]?.type}  </h4>
                </div>
            </div>
            ))};
        
        </>
        )};
    </div>
  )
}

export default HotelList;
