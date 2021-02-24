import Link from 'next/link'
import IconLogo from '@icons/Logo'

const Logo = () => {
  return (
    <Link href='/'>
      <a>
        <IconLogo />
      </a>
    </Link>
  )
}

export default Logo
