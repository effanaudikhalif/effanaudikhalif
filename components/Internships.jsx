import { assets, InternshipsData, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Internships = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    transition={{ duration: 1 }}
    id="internships" className='w-full px-[12%] py-10 scroll-mt-20'>

       <motion.h4 
       initial={{ y: -20, opacity: 0 }} 
       whileInView={{ y: 0, opacity: 1 }} 
       transition={{ delay: 0.3, duration: 0.5 }}
       className='text-center mb-2 text-lg font-Ovo'>
       My experience (more on LinkedIn)</motion.h4>

      <motion.h2 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
      Internships</motion.h2>

        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.9, duration: 0.6 }}
  className="flex flex-col items-center gap-6 my-10 w-full"
>
  {InternshipsData.map(({ icon, company, title, location, duration, description, tools, link }, index) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      key={index}
      className="w-full max-w-2xl border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
    >
    <div className="flex items-center gap-4 mt-4">
        {/* Icon */}
        <Image src={icon} alt="" className="w-10 h-10 flex-shrink-0" />

        {/* Text beside icon */}
        <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{company}</h3>
            <p className="text-sm text-gray-600 dark:text-white/70">{title}</p>
        </div>
        </div>

        {/* Add top margin here */}
        <p className="text-sm text-gray-600 dark:text-white/70 mt-3">{location} • {duration}</p>

        <p className="text-sm text-gray-600 leading-5 dark:text-white/80 mt-3">{description}</p>

        {link && (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm mt-3 text-blue-500 hover:underline"
        >
            Website <Image alt="" src={assets.right_arrow} className="w-4" />
        </a>
    )}
    </motion.div>
  ))}
</motion.div>

    </motion.div>
  )
}

export default Internships
