import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Mail from "../../components/mail/Mail";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState,useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import { SearchContext } from "../../utilities/SearchContext";
import { AuthContext } from "../../utilities/AuthContext";
import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const{data,loading} = useFetch(`http://localhost:4550/api/hotels/find/${id}`);
 
  const {dates, options} = useContext(SearchContext);
  
  const MILLISECONDS_PER_DAY = 1000*60*60*24;

  function dayDiffernce(date1,date2){
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);

    return diffDays;
  }

  const days = dayDiffernce(dates[0].endDate,dates[0].startDate);

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const photos = [
    {
      src: require('./img/nai.jpg'),
    },
    {
      src: require('./img/nai.jpg'),
    },
    {
      src: require('./img/nakuru.jpg'),
    },
    {
      src: require('./img/nairobi.jpg'),
    },
    {
      src: require('./img/nairobi.jpg'),
    },
    {
      src: require('./img/nairobi.jpg'),
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  const handleClick = () =>{
      if(user){
        setOpenModal(true);
      }else{
        navigate("/login"); 
      }
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? ("loading please give us a moment"):
      (<div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper"> 
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location {data.distance}m from CBD
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over KSH. {data.cheapestPrice} at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{data.title}</h1>
              <p className="hotelDesc">
               {data.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {days}-night stay!</h1>
              <span>
                Located in the real heart of city, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>KSH.{days * data.cheapestPrice * options.rooms}</b> ({days} nights)
              </h2>
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <Mail />
        <Footer />
      </div>
      )}
      
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
    </div>
  );
};

export default Hotel;