import React from 'react'
import './header.css';
import type from 'react';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faTaxi, faCar, faMagnet, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Header = ({ type}) => {
    const [destination, setDestination] = useState()
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult:1,
        children:0,
        rooms:1
    })

    const navigate =  useNavigate();

    const handleOption = (name,operation)=>{
        setOptions(prev=>{return{
            ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] -1,
        } })
    }

    const handleSearch = ()=>{
        navigate('/hotels',{state : {destination,date,options}});
    }
  return (
    <div className='header'>
        <div className={ type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active" >
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faMagnet} />
                    <span>Atrractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxis</span>
                </div>
            </div>
            { type !== "list" &&
            
            <>
            <h3 className="headerTitle">A lifetime full of Happynes? It's Marvelant.</h3>
            <p className='headerExp'>Get great discounts. By making a free Booking. </p>
            <button className="headerBtn">Sign Up / Sign In</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input type="text" name="" className='hdSearchInput' 
                    placeholder='Which City are you going?'
                    onChange={(e) => setDestination(e.target.value)} />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span className="headerSearchText" onClick={()=> setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to 
                    ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                   {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        minDate={new Date()}
                        />}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span onClick={()=> setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children .${options.rooms} rooms`}</span>
                    {openOptions && <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button
                                disabled={options.adult <=1}
                                className="optionCounterBtn" onClick={()=>handleOption("adult","d")}>-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="optionCounterBtn" onClick={()=>handleOption("adult","i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                                <button className="optionCounterBtn"
                                disabled={options.children <=1}
                                onClick={()=>handleOption("children","d")}>-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button className="optionCounterBtn" onClick={()=>handleOption("children","i")}>+</button>
                            </div>
                            
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Rooms</span>
                            <div className="optionCounter">
                                <button className="optionCounterBtn" 
                                disabled={options.rooms <=1}
                                onClick={()=>handleOption("room","d")}>-</button>
                                <span className="optionCounterNumber">{options.rooms}</span>
                                <button className="optionCounterBtn" onClick={()=>handleOption("room","i")}>+</button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>Search</button>
                </div>
            </div>
            </>}
        </div>
    </div>
  )
}

export default Header
