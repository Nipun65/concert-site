import Image from 'next/image'
import { constants } from './utils'
import EventDetails, { WaitList } from './components/EventDetails'
import Logo from './components/Logo'
import Maincontent from './components/MainContent'
import Marquee from './components/Marquee'
import astrisk from '@/public/astriskblacklogo.png'

export default function Home() {
  return (
    <main className="flex bg-[#16191D] flex-col">
      <div className="md:hidden xs:flex justify-between items-center py-6 px-4">
        <Logo />
        <WaitList />
      </div>
      <div className="flex md:flex-row xs:flex-col-reverse">
        <div className="xs:w-full md:w-[60%] xs:h-96 md:min-h-screen overflow-x-hidden hide-scrollbar">
          <div
            className="xs:hidden 
          md:block py-6 px-4"
          >
            <Logo />
          </div>
          <Maincontent />
        </div>
        <Marquee>
          Event: Oasis Bus tour, JLN Stadium, Delhi
          <Image
            alt="asterisk"
            src={astrisk}
            className="xs:size-5 md:size-6 lg:size-8 mx-2"
          />
          Collection Live: Meta Lives
        </Marquee>
        <EventDetails data={constants.EVENTDETAILS} />
      </div>
    </main>
  )
}
