import React from 'react'
import Image from 'next/image';

import Logo from '../../../public/logo.svg';
import Link from 'next/link';


const Header = () => {
  return (
    <header className='pt-4 pb-4'>
      <Link href="/" className='inline-block'>
        <Image src={Logo} alt='Planet Impact HUB logo'></Image>
      </Link>
    </header>
  )
}

export default Header