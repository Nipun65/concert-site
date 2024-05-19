"use client";
import { useState } from "react";

type TabsData = {
  name: string;
  id: number;
};
interface TabsProps {
  data: TabsData[];
}

const Tabs: React.FC<TabsProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <ul className="flex w-fit rounded-full gap-1 bg-[#282B30] m-6 cursor-pointer xs:ml-auto md:m-6">
      {data?.map((item: TabsData, index: number) => {
        return (
          <li
            className={`text-white font-bold px-6 py-4 tracking-wider text-center xs:text-xs sm:text-sm lg:text-base xs:min-w-[4rem] md:min-w-[5rem] lg:min-w-[8rem] rounded-full ${
              index === activeTab ? "bg-[#484E56]" : ""
            }`}
            onClick={() => setActiveTab(index)}
            key={item?.id}
          >
            {item?.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
