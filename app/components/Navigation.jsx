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

const Navigation = () => {
  return (
    <header className='App-header'>
      <Link href={links[0].route} className='title'>
        <h1 className='title'>Rafael</h1>
      </Link>
      <nav>
        <ul className='list'>
          <li key={links[1].route}>
            <Link href={links[1].route}><button>{links[1].label}</button></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
