import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className='bookNow'>Book Now!</button>
          <h2 className="hotelTitle">Hilton Hotel</h2>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Ronald Ngala St Nairobi</span>
            <span className="hotelPrice">
              Book a stay over KSH.15,800 at this premise and get free airport taxi
            </span>
            <div className="hotelImgs">
              {/* {PushSubscriptionOptions.map(photo=>(
                <div className='hotelImgWrapper'>
                  <img src={photo.src} alt="" className="hotelImg" />
                </div>
              ))} */}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h3 className="hotelDetTitle">Stay at the Core Of Great Nation</h3>
                <p className="hotelDesc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                   Quas fugiat ducimus sint. Harum, natus quidem. Dolor harum 
                   explicabo eveniet suscipit. Dignissimos, inventore soluta.
                    Debitis perferendis quisquam inventore, 
                  consectetur omnis repellendus.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h4> Perfect for a 1-Night Nap!</h4>
                <span>
                  Located in the heart of Milk way Galaxy
                </span>
                <h3><b>KSH.75,000</b> (5 Nights)</h3>
                <button>Book Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel;