import { constants } from "../utils";
import Carousel from "./Carosouel";

const Maincontent = () => {
  return (
    <div className="w-full relative h-full overflow-hidden">
      <div className="w-[55%] z-0 absolute">
        <div className="font-bold text-[12rem] text-[#444649] w-full break-all">
          ASTRIX
        </div>
        <div className="font-bold text-[12rem] text-[#444649] w-full break-all">
          EVENTS
        </div>
      </div>
      <div className="z-20 absolute bottom-16 left-[10rem]">
        <Carousel data={constants.CAROUSELIMAGES} />
      </div>
    </div>
  );
};
export default Maincontent;
