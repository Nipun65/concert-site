import Image from "next/image";
import astrisk from "./../../public/astrisklogo.png";

const Logo = () => {
  return (
    <div className="text-[#F2BE5C] font-bold text-start text-4xl my-6 mx-4 flex gap-3 items-center">
      <Image className="size-10" src={astrisk} alt="logo" />
      Astrix.
    </div>
  );
};
export default Logo;
