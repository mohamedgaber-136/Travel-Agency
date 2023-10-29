import bgimg from "./pexels-flo-dahm-699466.jpg";
import "./Card.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const Card = ({duration}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration={`${duration}`}
      className="cardParent py-2 animation"
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
          <div className="price">
            <h3>600$</h3>
          </div>
        </div>
        <button className="BookHotelBtn">Book a Hotel</button>
      </div>
    </div>
  );
};
