import bgimg from "./pexels-flo-dahm-699466.jpg";
import "./Card.css";
export const Card = () => {
  return (
    <div
      className="cardParent py-2"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      >
      <div className="d-flex  flex-column h-100  align-items-center justify-content-end">

      <div className="cardData text-white container d-flex align-items-center justify-content-between">
        <div className="title">
            <h3 className="m-0">Paris</h3>
            <h6>An amazing journey</h6>
        </div>
        <div className="price"><h3>600$</h3></div>
      </div>
      <button className="BookHotelBtn">Book a Hotel</button>
      </div>
    </div>
  );
};
