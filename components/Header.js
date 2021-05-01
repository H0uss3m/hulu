import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'
const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row justify-between items-center h-auto select-none'>
      <div className='flex flex-grow max-w-2xl justify-evenly'>
        <HeaderItem title='HOME' Icon={HomeIcon} />
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
        <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
        <HeaderItem title='SEARCH' Icon={SearchIcon} />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
      </div>
      <Image
        className='object-contain'
        src='https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png'
        width={200}
        height={100}
      />
    </header>
  )
}

export default Header
