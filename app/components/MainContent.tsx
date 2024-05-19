import { constants } from "../utils";
import Carousel from "./Carosouel";
import Tabs from "./Tabs";

const Maincontent = () => {
  return (
    <>
      <div className="xs:block md:hidden flex w-full justify-end items-end">
        <Tabs data={constants.TABS} />
      </div>
      <div className="relative w-full h-full overflow-x-hidden">
        <div className="w-[45%] z-0 absolute xs:text-6xl sm:text-[4rem] md:text-[7rem] lg:text-[10rem] lg:leading-[10rem]">
          <div className="font-bold text-[#444649] w-full break-all">
            ASTRIX
          </div>
          <div className="font-bold text-[#444649] w-full break-all mt-12">
            EVENTS
          </div>
        </div>

        <div className="z-20 absolute xs:top-4 md:top-auto md:bottom-16 left-[10rem]">
          <Carousel data={constants.CAROUSELIMAGES} />
        </div>
      </div>
      <div className="xs:hidden md:block">
        <Tabs data={constants.TABS} />
      </div>
    </>
  );
};
export default Maincontent;
