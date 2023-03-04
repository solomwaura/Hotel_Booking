import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import SearchItem from '../../components/searchItem/SearchItem'
import './list.css';
import { useState } from 'react'
import {format} from "date-fns"
import { DateRange } from 'react-date-range';
import useFetch from '../../hooks/useFetch';

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const {data,loading, reFetch} = useFetch(`http://localhost:4550/api/hotels?city=${destination}&min=${min || 0}&max=${max || 15000}`);
  
  const handleClick =() =>{
    reFetch();
  }

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search Here</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" onChange={e=>setDestination(e.target.value)} placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check In Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to
              ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
             
             { openDate && (<DateRange 
              onChange={(item) => setDates([item.selection])} 
              minDate={new Date()}
              ranges={dates}
              />)}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptiontext">Min Price <small>per night</small></span>
                <input type="number" onChange={e=>setMin(e.target.value)} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptiontext">Max Price <small>per night</small></span>
                <input type="number" onChange={e=>setMax(e.target.value)} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptiontext">Adult</span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptiontext">Children</span>
                <input type="number" min={0}  className="lsOptionInput" placeholder={options.childrens}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptiontext">Rooms</span>
                <input type="number" min={1}  className="lsOptionInput" placeholder={options.rooms} />
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            { loading ? ("loading") : (
            <>
            {data.map(item =>(
              <SearchItem item={item} key={item._id}/>
            ))}
            </>
            )}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;
