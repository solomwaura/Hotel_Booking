import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import './home.css';
import HotelList from '../../components/hotelList/HotelList';
import Favourites from '../../components/favourites/Favourites';
import Mail from '../../components/mail/Mail';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header />

        <div className="homeContainer">
        <h1 className='homeTitle'>Available Cities.</h1>
          <Featured />
          <h1 className='homeTitle'>Browse By Property type.</h1>
          <HotelList />
          <h1 className='homeTitle'>Favourites Homes for our guests.</h1>
          <Favourites />

          <Mail />
          <Footer />
        </div>
        
    </div>
  )
}

export default Home;
