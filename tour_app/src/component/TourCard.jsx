import Button from "./Button";

function TourCard( tour ) {
  return (
    <div className="w-300px bg-white rounded-xl shadow-md hover:shadow-lg ">
      <img src={tour.image} alt={tour.name} className="w-full h-[160px]"/>

      <div className="p-4">
        <h3 className="font-semibold text-lg min-h-[50px]">{tour.name}</h3>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <i class="fa-solid fa-location-dot"></i>
            <p>Từ: {tour.startLocation} </p>
          </div>
          <div className="flex items-center">
            <i class="fa-solid fa-plane"></i>
            <i class="fa-solid fa-train"></i>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="flex items-center mt-3">
          <i class="fa-solid fa-calendar-days"></i>
          <p>{tour.startDate}</p>
          <p className="text-pink-600 text-sm">({tour.duration})</p>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center">
            <i class="fa-solid fa-street-view"></i>
            <p className="ml-1 font-semibold">Còn: {tour.slots} chỗ </p>
          </div>
          <div className="text-right text-sm">
            <p>Giá chỉ từ</p>
            <p className="text-pink-600 font-bold text-lg">
              {tour.price}đ
            </p>
          </div>
        </div>
        
        <div className="mt-5" >
          <Button className="bg-blue-600 hover:bg-blue-800 text-white text-sm !important" label="Đặt tour" />
        </div>
      </div>
    </div>
  );
}

export default TourCard;