import { Card } from "../Card/Card";
import { SeeAllButton } from "../seeAllBtn/SeeAll";
import 'aos/dist/aos.css';
import "./main.css";

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
          <SeeAllButton />
        </div>
      </div>
      <div className="d-flex gap-3 justify-content-center flex-wrap">
        <Card duration={'3000'} />
        <Card duration={'2000'} />
        <Card duration={'1000'} />
        <Card duration={'500'} />
      </div>
    </main>
  );
};
