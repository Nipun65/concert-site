import postmalone from '@/public/postmalone.jpg'
import japaneselady from '@/public/japaneselady.png'
import artist from '@/public/artist.jpg'
import kanye from '@/public/kanye.jpg'
import singer from '@/public/singer.jpg'
import tameimpala from '@/public/tameimpala.webp'
import olivia from '@/public/olivia-rodrigo.webp'
import japanesebreakfast from '@/public/japanesebreakfast.jpg'

const EVENTDETAILS = {
  title: 'Explore Your First Collectible',
  name: 'Meta Lives',
  venue: 'Live in Astrix',
  date: '04/3/2024',
  time: '19:00',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.`,
  lineup: [olivia, tameimpala, japanesebreakfast],
}

const CAROUSELIMAGES = [
  {
    image: japaneselady,
    venue: 'Tokyo, Japan',
    eventName: 'Cultural Festival',
    id: 1,
  },
  {
    image: artist,
    venue: 'New York, USA',
    eventName: 'Art Exhibition',
    id: 2,
  },
  {
    image: singer,
    venue: 'Las Vegas, USA',
    eventName: 'Album Launch',
    id: 3,
  },
  {
    image: postmalone,
    venue: 'Los Angeles, USA',
    eventName: 'Twelve Carat Tour',
    id: 4,
  },
  {
    image: kanye,
    venue: 'Chicago, USA',
    eventName: 'Coachella Festival',
    id: 5,
  },
]

const TABS = [
  {
    name: 'Events',
    id: 1,
  },
  {
    name: 'Collections',
    id: 2,
  },
]

export { EVENTDETAILS, CAROUSELIMAGES, TABS }
