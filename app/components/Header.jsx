import Link from 'next/link'

const links = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About Me',
    route: '/contact'
  }
]

const Header = () => {
  return (
    <header className='App-header'>
      <Link href={links[0].route} className='title'>
        <h1 className='title'>N3s</h1>
      </Link>
    </header>
  )
}

export default Header
