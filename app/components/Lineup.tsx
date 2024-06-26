import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface LineupProps {
  data: StaticImageData[]
}
const Lineup: React.FC<LineupProps> = ({ data }) => {
  return (
    <>
      <div className="font-bold xs:text-sm sm:text-lg md:text-xl lg:text-2xl tracking-wide">
        Artist Lineup
      </div>
      <div className="flex xs:flex-wrap sm:items-center xs:gap-2 justify-center lg:flex-row lg:flex-nowrap lg:gap-1">
        {data?.map((item: StaticImageData, index: number) => {
          return (
            <Image
              src={item}
              className={`rounded-md xs:size-28 md:size-32 lg:size-36 ${
                index === 1 ? 'lg:scale-110' : ''
              }`}
              alt="lineup"
              key={index}
            />
          )
        })}
      </div>
    </>
  )
}

export default Lineup
