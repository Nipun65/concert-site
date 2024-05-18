interface MarqueeProps {
  children: React.ReactNode;
}
const Marquee: React.FC<MarqueeProps> = ({ children }) => {
  return (
    <div className="w-[6%] text-[#16191D] bg-[#B9A0FF] h-screen overflow-hidden">
      <div className="animate-marquee flex flex-col h-full font-bold xs:text-base sm:text-xl md:text-2xl lg:text-3xl items-center justify-between">
        {children}
      </div>
    </div>
  );
};
export default Marquee;
