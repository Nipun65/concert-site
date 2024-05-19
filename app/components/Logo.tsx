import Image from 'next/image'
import astrisk from '@/public/astrisklogo.png'

const Logo = () => {
  return (
    <div className="text-[#F2BE5C] font-bold text-start xs:text-2xl md:text-3xl lg:text-4xl flex gap-3 items-center">
      <Image
        className="xs:size-6 md:size-8 lg:size-10"
        src={astrisk}
        alt="logo"
      />
      Astrix.
    </div>
  )
}
export default Logo
