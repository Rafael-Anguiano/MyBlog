import styles from '@/app/components/header.module.css'
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
    <header className={styles.header}>
      <Link href={links[0].route}>
        <h1 className={styles.header}>N3s</h1>
      </Link>
    </header>
  )
}

export default Header
