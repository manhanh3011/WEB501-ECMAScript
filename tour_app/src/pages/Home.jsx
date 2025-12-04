import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import Banner from '../component/Banner.';
import Header from '../component/Header';
import TourCard from '../component/TourCard';
import Footer from '../component/Footer';

function Home() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const getTours = async () => {
    try {
      const res = await axios.get("http://localhost:3000/tours");
      console.log(res);
      // Chỉ hiển thị những tour đang active
      const activeTours = res.data.filter(tour => tour.active === true);
      setTours(activeTours);
    } catch (error) {
      console.log(error);
    }
    };
    getTours();
  }, []); 
 
  return (
    <div className=""> 
      <Header />
      <Banner />
      <div className="">
        <h2 className="text-2xl font-bold text-blue-600 my-4 mt-15">Tour ưu đãi giá tốt</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
        {tours.map(tours => (
          <TourCard key={tours.id} 
                    name={tours.name} 
                    image={tours.image} 
                    price={tours.price} 
                    startLocation={tours.startLocation}
                    startDate={tours.startDate}
                    duration={tours.duration}
                    slots={tours.slots} /> 
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Home;
