import React from 'react'
import Image from 'next/image';

const SocialButton = ({href, imgSrc, altText}: {href: string; imgSrc: string; altText?: string;}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className='bg-white hover:bg-gray-200 transition-colors p-2 rounded-md'>
        <Image src={imgSrc} alt={altText ?? "Social icon"}/>
    </a>
  )
}

export default SocialButton;