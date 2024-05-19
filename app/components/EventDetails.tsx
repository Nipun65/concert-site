'use client'
import Image, { StaticImageData } from 'next/image'
import { constants } from '../utils'
import Lineup from './Lineup'
import Button from './Button'
import venue from '@/public/venue.svg'
import cloak from '@/public/clock.svg'
import qrcode from '@/public/qrcode.svg'

interface EventDetails {
  title: string
  name: string
  venue: string
  date: string
  time: string
  description: string
  lineup: StaticImageData[]
}

interface EventDetailsProps {
  data: EventDetails
}

export const WaitList = () => {
  return (
    <Button
      className="bg-[#F2BE5C] rounded-full md:tracking-normal lg:tracking-wider
        xl font-bold xs:text-xs md:text-sm lg:text-lg text-black"
    >
      Join WaitList
    </Button>
  )
}

export const QrCode = () => {
  return (
    <div className="bg-white p-1 rounded-md w-fit h-fit">
      <Image
        src={qrcode}
        alt="qr-code"
        className="xs:size-10 md:size-12 lg:size-16"
      />
    </div>
  )
}

const EventDetails: React.FC<EventDetailsProps> = ({ data }) => {
  return (
    <div className="flex flex-col text-white md:w-[35%] p-6 xs:h-fit md:h-screen overflow-auto">
      <div className="md:flex-grow">
        <div className="font-bold xs:text-xl md:text-2xl lg:text-3xl tracking-wider w-[60%]">
          {data?.title}
        </div>
        <div className="flex flex-col xs:gap-3 md:gap-4 lg:gap-5 mt-12">
          <div className="font-bold xs:text-2xl md:text-3xl lg:text-5xl tracking-wider">
            {data?.name}
          </div>
          <div className="sm:gap-2 lg:gap-3 font-semibold xs:text-sm xs:flex xs:items-start xs:gap-4 md:flex-row md:text-base lg:text-lg">
            <div className="flex xs:flex-col xs:gap-1">
              <div className="flex items-center xs:gap-1 sm:gap-2 lg:gap-3 tracking-widest">
                <Image
                  src={venue}
                  alt="venue"
                  className="xs:size-3 sm:size-5 lg:size-6"
                />
                {data?.venue}
              </div>
              <div className="flex items-center xs:gap-1 sm:gap-2 lg:gap-3 tracking-widest">
                <Image
                  src={cloak}
                  alt="cloak"
                  className="xs:size-3 sm:size-5 lg:size-6"
                />
                {data?.date} @{data?.time}
              </div>
            </div>
            <div className="xs:block md:hidden">
              <QrCode />
            </div>
          </div>
          <p className="w-[70%] xs:text-xs md:text-base font-medium tracking-wider">
            {data?.description}
          </p>

          <Lineup data={constants?.EVENTDETAILS?.lineup} />
        </div>
      </div>
      <div className="md:mt-auto">
        <div className="md:flex justify-between items-end mt-4 xs:hidden">
          <QrCode />
          <WaitList />
        </div>
      </div>
    </div>
  )
}
export default EventDetails
