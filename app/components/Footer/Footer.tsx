import React from 'react'
import Image from 'next/image'
import SocialButton from '../SocialButton/SocialButton'

import HHSLogo from '../../../public/hhsLogo.svg'
import LinkedIn from '../../../public/linkedin.svg'
import Twitter from '../../../public/twitter.svg'
import Instagram from '../../../public/instagram.svg'

const socialLinks = [
    {
        href: 'https://www.linkedin.com',
        imgSrc: LinkedIn,
        altText: 'LinkedIn'
    },
    {
        href: 'https://x.com',
        imgSrc: Twitter,
        altText: 'Twitter'
    },
    {
        href: 'https://www.instagram.com/',
        imgSrc: Instagram,
        altText: 'Instagram'
    }
];

const Footer = () => {
  return (
    <footer className='bg-cyan-500 text-white text-2xl p-16 flex flex-col'>
        <div className='pb-8'>
            <h3 className='font-bold'>Contact:</h3>
            <p>dr. Nova Sterling</p>
            <a href="mailto:someone@example.com" className='underline'>n.sterling@hhs.nl</a>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
            <a href='https://www.hhs.nl/' target='_blank' rel='noopener noreferrer'>
                <Image src={HHSLogo} alt="De Haagse Hoge School logo"/>
            </a>
            <div className='flex flex-row gap-4 '>
                {socialLinks.map(({href, imgSrc, altText}) => (
                    <SocialButton key={href} href={href} imgSrc={imgSrc} altText={altText} />
                ))}
            </div>
        </div>

    </footer>
  )
}

export default Footer;