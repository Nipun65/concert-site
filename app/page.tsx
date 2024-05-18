import { constants } from "./utils";
import Logo from "./components/Logo";
import EventDetails from "./components/EventDetails";
import Maincontent from "./components/MainContent";
import Marquee from "./components/Marquee";
import astrix from "./../public/astrix.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-[#16191D] flex-col">
      <div className="flex">
        <div className="w-[60%] h-screen overflow-auto overflow-x-hidden hide-scrollbar">
          <Logo />
          <Maincontent />
        </div>
        <Marquee>
          <span className="transform rotate-90 whitespace-nowrap tracking-wider flex gap-3 items-center delay-0">
            Event: Oasis Bus tour, JLN Stadium, Delhi
            <Image src={astrix} alt="astrix logo" className="h-6 w-6" />
            Collection Live: Meta Lives
            <span className="whitespace-nowrap tracking-wider flex gap-3 items-center delay-[30s]">
              Event: Oasis Bus tour, JLN Stadium, Delhi
              <Image src={astrix} alt="astrix logo" className="h-6 w-6" />
              Collection Live: Meta Lives
            </span>
          </span>
        </Marquee>

        <EventDetails data={constants.EVENTDETAILS} />
      </div>
    </main>
  );
}
