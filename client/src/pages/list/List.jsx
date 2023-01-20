import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import SearchItem from '../../components/searchItem/SearchItem'
import './list.css';
import { useState } from 'react'
import {format} from "date-fns"
import { DateRange } from 'react-date-range';

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
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
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check In Date</label>
              {/* <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].starDate, "MM/dd/yyyy")} to 
              ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
             
             { openDate && (<DateRange 
              onChange={(item) => setDate([item.selection])} 
              minDate={new Date()}
              ranges={date}
              />)} */}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptiontext">Min Price <small>per night</small></span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptiontext">Max Price <small>per night</small></span>
                <input type="number" className="lsOptionInput" />
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
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;
