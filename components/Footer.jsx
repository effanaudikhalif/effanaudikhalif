import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>Connect with me</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/effanaudikhalif">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/effanaudikhalif/">LinkedIn</a></li>
            <li>ekhalif@bu.edu</li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
