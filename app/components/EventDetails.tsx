"use client";
import Button from "./Button";
import Image from "next/image";
import venue from "./../../public/venue.svg";
import cloak from "./../../public/clock.svg";
import qrcode from "./../../public/qrcode.svg";

interface EventDetailsProps {
  data: any;
}

const EventDetails: React.FC<EventDetailsProps> = ({ data }) => {
  return (
    <div className="text-white w-[34%] p-6 h-screen overflow-auto relative">
      <div className="font-bold text-3xl tracking-wider w-[60%]">
        {data?.title}
      </div>
      <div className="flex flex-col gap-6 mt-12">
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

        <div className="font-bold text-2xl tracking-wide">Artist Lineup</div>
        <div className="flex md:flex-col md:items-center justify-center lg:flex-row -gap-1">
          {data?.lineup.map((item: any, index: number) => {
            return (
              <Image
                src={item}
                className={`rounded-md h-36 w-36 ${
                  index === 1 ? "lg:scale-110" : ""
                }`}
                alt="lineup"
              />
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-end mt-5">
        <div className="bg-white p-1 rounded-md w-fit h-fit">
          <Image src={qrcode} alt="qr-code" className="md:size-12 lg:size-16" />
        </div>
        <Button
          className="bg-[#F2BE5C] rounded-full tracking-wider
        xl font-bold md:text-base lg:text-lg text-black"
        >
          Join WaitList
        </Button>
      </div>
    </div>
  );
};
export default EventDetails;
