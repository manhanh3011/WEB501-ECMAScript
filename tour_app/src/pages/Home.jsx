
import '../App.css';
import Banner from '../component/Banner.';
import Header from '../component/Header';
import TourCard from '../component/TourCard';
import Footer from '../component/Footer';

function Home() {
  const tours = [
  {
    id: 1,
    name: "Tour Đà Nẵng – Hội An",
    price: 3500000,
    duration: "3 ngày 2 đêm",
    startLocation: "TP. Hồ Chí Minh",
    departure: "TP. Hồ Chí Minh",
    startDate: "15/12/2025",
    slots: 12,
    image: "https://media-cdn-v2.laodong.vn/storage/newsportal/2022/7/13/1067753/Cac-Tour-Dulich-Tron.jpg?w=800&crop=auto&scale=both",
    description:
      "Khám phá Đà Nẵng hiện đại và phố cổ Hội An với những công trình lịch sử, bãi biển đẹp và ẩm thực đặc sắc."
  },
  {
    id: 2,
    name: "Tour Đà Lạt – Thành phố ngàn hoa",
    price: 2800000,
    duration: "3 ngày 2 đêm",
    startLocation: "TP. Hồ Chí Minh",
    departure: "TP. Hồ Chí Minh",
    startDate: "20/12/2025",
    slots: 8,
    image: "https://dulichviet.com.vn/images/bandidau/images/CH%C3%82U%20%C3%82U/2015/TH%C3%81NG%2011/tour-du-lich-nong-nan-nuoc-phap_du-lich-viet.png",
    description:
      "Trải nghiệm khí hậu se lạnh, đồi thông thơ mộng và những điểm check-in nổi bật của Đà Lạt."
  },
  {
    id: 3,
    name: "Tour Phú Quốc – Thiên đường biển đảo",
    price: 4500000,
    duration: "4 ngày 3 đêm",
    startLocation: "Hà Nội",
    departure: "Hà Nội",
    startDate: "05/01/2026",
    slots: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFMp5Kmekfjam7SYKn3aDzsZIvhK2h7kBjA&s",
    description:
      "Tận hưởng biển xanh – cát trắng – nắng vàng, cùng các hoạt động lặn ngắm san hô và khám phá ẩm thực biển."
  },
  {
    id: 4,
    name: "Tour Sa Pa – Núi rừng Tây Bắc",
    price: 4200000,
    duration: "3 ngày 2 đêm",
    startLocation: "Hà Nội",
    departure: "Hà Nội",
    startDate: "12/01/2026",
    slots: 6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-UrW0ql7vZiuAhgCHxTzVnQazO7Z6fJYdw&s",
    description:
      "Chinh phục Fansipan, khám phá bản làng người H’Mông và thưởng thức khí hậu mát lạnh quanh năm."
  }
];


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
