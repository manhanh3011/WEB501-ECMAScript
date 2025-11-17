import Button from "./Button";

function TourCard (tour){
    return (
            <div key={tour.id}>
              <img src={tour.image} alt={tour.name} width={350} />
              <h3 className=''>{tour.name}</h3>
              <Button label="Xem thêm" />
              <Button label="Đặt tour" />
            </div>
          );
};

export default TourCard;