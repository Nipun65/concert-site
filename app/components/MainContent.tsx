import { constants } from "../utils";
import Carousel from "./Carosouel";
import Tabs from "./Tabs";

const Maincontent = () => {
  return (
    <>
      <div className="w-full relative h-full">
        <div className="w-[45%] z-0 absolute xs:text-6xl sm:text-[4rem] md:text-[7rem] lg:text-[10rem] lg:leading-[10rem]">
          <div className="font-bold  text-[#444649] w-full break-all">
            ASTRIX
          </div>
          <div className="font-bold text-[#444649] w-full break-all mt-12">
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
