interface MarqueeProps {
  children: React.ReactNode;
}
const Marquee: React.FC<MarqueeProps> = ({ children }) => {
  return (
    <div className="md:w-[5%] text-[#16191D] bg-[#B9A0FF] xs:h-fit md:h-screen overflow-hidden">
      <div className="xs:animate-horizontal-marquee md:animate-vertical-marquee flex md:flex-col h-full font-semibold xs:text-base sm:text-xl md:text-2xl lg:text-3xl items-center justify-between">
        <div className="whitespace-nowrap md:transform md:rotate-90 tracking-wider flex items-center">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Marquee;
