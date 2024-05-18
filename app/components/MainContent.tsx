import { constants } from "../utils";
import Carousel from "./Carosouel";
import Tabs from "./Tabs";

const Maincontent = () => {
  return (
    <>
      <div className="w-full relative h-full">
        <div className="w-[45%] z-0 absolute">
          <div className="font-bold text-[10rem] text-[#444649] w-full break-all leading-[10rem]">
            ASTRIX
          </div>
          <div className="font-bold text-[10rem] text-[#444649] w-full break-all mt-12 leading-[10rem]">
            EVENTS
          </div>
        </div>
        <div className="z-20 absolute bottom-16 left-[10rem]">
          <Carousel data={constants.CAROUSELIMAGES} />
        </div>
      </div>
      <Tabs data={constants.TABS} />
    </>
  );
};
export default Maincontent;
