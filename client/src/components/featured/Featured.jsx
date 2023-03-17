import React from 'react'
import useFetch from '../../hooks/useFetch';
import './featured.css';

const Featured = () => {

    const {data,loading,error} = useFetch("http://localhost:4550/api/hotels/countByCity?cities=Nairobi,Nakuru,Kitui")
    // console.log(data)
  
  return (
    <div className='featured'>
        {loading ?(
            "loading Just a Sec..."
        ): (
            <>
        
                <div className="featuredItem">
                    <img src={require('./img/nai.jpg')} alt="" className='featuredImg'/>
                    <div className="featuredTitle">
                        <h1>Nairobi</h1>
                        <h1>{data[0]} Properties</h1>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src={require('./img/nakuru.jpg')} alt=""  className='featuredImg'/> 
                    <div className="featuredTitle">
                        <h1>Nakuru</h1>
                        <h1>{data[1]}Properties</h1>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src={require('./img/nairobi.jpg')} alt="" className='featuredImg'/>
                    <div className="featuredTitle">
                        <h1>Kitui</h1>
                        <h1>{data[2]}Properties</h1>
                    </div>
                </div>
            </>
        )}
    </div>
  );
};

export default Featured
