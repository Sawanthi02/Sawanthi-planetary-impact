import React from 'react'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

//interface UspsItemProps made to define the variables that the UspsItem component will receive.

interface UspsItemProps {
    href: string;
    title: string;
    paragraph: string;
    imgSrc: StaticImageData;
}

// Component to dispaly a story item. made like this to easily reuse and expand the main page once more stories are added.
// holds a Link button that sends the user to a page with more information about the item.

const UspsItem = ({href, title, paragraph, imgSrc} : UspsItemProps) => {
  return (
    <section className='relative w-full h-96 overflow-hidden rounded-4xl'>
        <div className='absolute inset-0 z-0 bg-black/75'>
            <Image src={imgSrc} alt={`Image for ${title}`} className='w-full h-full object-cover mix-blend-overlay'/>
        </div>
        <div className='relative z-10 p-4'>
            <h1 className='text-cyan-600 mb-4 font-bold text-xl lg:text-3xl'>{title}</h1>
            <p className='text-white text-base lg:text-xl'>{paragraph}</p>
        </div>
        <div className='absolute bottom-2 right-2 z-10'>
          <Link href={href}>
            <button className='bg-cyan-500 m-4 p-2 rounded-md text-white hover:bg-cyan-600'>Lees meer</button>
          </Link>
        </div>
    </section>
  )
}

export default UspsItem