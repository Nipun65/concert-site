"use client";
import { useState } from "react";

interface TabsProps {
  data: any;
}

const Tabs: React.FC<TabsProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <ul className="flex w-fit rounded-full gap-1 bg-[#282B30] m-3 cursor-pointer">
      {data.map((item: any, index: number) => {
        return (
          <li
            className={`text-white font-bold px-6 py-4 tracking-wider text-center min-w-[8rem] rounded-full ${
              index === activeTab ? "bg-[#484E56]" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};
export default Tabs;
