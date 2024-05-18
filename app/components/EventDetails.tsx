"use client";
import Image from "next/image";
import venue from "./../../public/venue.svg";
import cloak from "./../../public/clock.svg";

interface EventDetailsProps {
  data: any;
}

const EventDetails: React.FC<EventDetailsProps> = ({ data }) => {
  return (
    <div className="text-white w-[35%] p-4 h-screen overflow-auto">
      <div className="font-bold text-3xl tracking-wider w-[60%]">
        {data?.title}
      </div>
      <div className="flex flex-col gap-6 mt-16">
        <div className="font-bold text-5xl tracking-wider">{data?.name}</div>
        <div className="flex gap-3 font-semibold text-lg">
          <div className="flex items-center gap-3 tracking-widest">
            <Image src={venue} alt="venue" className="h-6 w-6" />
            {data?.venue}
          </div>
          <div className="flex items-center gap-3 tracking-widest">
            <Image src={cloak} alt="cloak" className="h-6 w-6" />
            {data?.date} @{data?.time}
          </div>
        </div>
        <p className="w-[70%] font-medium tracking-wider">
          {data?.description}
        </p>
        <div className="font-bold text-2xl mt-3">Artist Lineup</div>
        <div className="flex md:flex-col md:items-center lg:flex-row gap-2 p-3">
          {data?.lineup.map((item: any, index: number) => {
            console.log(item);
            return (
              <Image
                src={item}
                className={`rounded-md h-36 w-36 ${
                  index === 1 ? "lg:scale-125" : ""
                }`}
                alt="lineup"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default EventDetails;
