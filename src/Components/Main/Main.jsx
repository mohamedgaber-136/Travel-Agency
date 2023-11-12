import { Card } from "../Card/Card";
import { SeeAllButton } from "../seeAllBtn/SeeAll";
import "aos/dist/aos.css";
import "./main.css";
import paris from "../../assets/images/paris.png";
import London from "../../assets/images/London.png";
import columbia from "../../assets/images/columbia.png";
import Melboune from "../../assets/images/Melboune.png";
import { useLocation, useNavigate } from "react-router-dom";

export const Main = () => {


  return (
    <main className="mainParent container">
      <div className="d-flex align-items-center justify-content-between">
        <div className="mainHeading ">
          <h2>Fall Into Travel</h2>
          <h6>
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, we’ve got <br /> the travel tools to get you
            to your destination.
          </h6>
        </div>
        <div>
          <SeeAllButton  />
        </div>
      </div>
      <div className="d-flex gap-3 justify-content-center flex-wrap">
        <Card duration={"3000"} img={paris} title={"Paris"} />
        <Card duration={"2000"} img={London} title={"London"} />
        <Card duration={"1000"} img={columbia} title={"columbia"} />
        <Card duration={"500"} img={Melboune} title={"Melbourne"} />
      </div>
    </main>
  );
};
