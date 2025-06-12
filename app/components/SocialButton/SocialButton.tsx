import React from 'react'
import Image from 'next/image';

// Button used in the footer for social media links.
//tried a difrent method of defining the variable types instead of a interface like in the UspsItem.

const SocialButton = ({href, imgSrc, altText}: {href: string; imgSrc: string; altText?: string;}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className='bg-white hover:bg-gray-200 transition-colors p-2 rounded-md'>
        <Image src={imgSrc} alt={altText ?? "Social icon"}/>
    </a>
  )
}

export default SocialButton;