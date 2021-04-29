import Image from 'next/image'
const Header = () => {
  return (
    <header className=''>
      <h1>this is the header</h1>
      <Image
        src='https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png'
        width={200}
        height={100}
      />
    </header>
  )
}

export default Header
