import React from 'react'
import space from '../assets/space.mp4'
import moon from '../assets/moon.webp'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <div className='sm:w-full bg-black sm:h-screen w-full h-screen flex justify-between items-center'>
    <div className='text-[#e0ccbb] sm:flex sm:flex-col sm:items-center sm:justify-center sm:text-center -mt-20 sm:-mt-0'>
    {["Our","Story"].map((item,index)=>{
      return <h1 className='sm:w-[50%] sm:text-[12vw] text-[14vw] sm:text-left sm:mx-0 mx-8 sm:-mt-28 -mt-4' key={index}><motion.span initial={{rotate:90,y:"40%",opacity:0}} whileInView={{rotate:0,y:0,opacity:1}} transition={{ease:[0.22,1,0.36,1],duration:0.8}} className='inline-block origin-left'>{item}</motion.span></h1>
    })}
    {/* <h1 className='sm:w-[50%] sm:text-[12vw] text-[14vw] sm:text-left sm:mx-0 mx-8'>Our</h1>
    <h1 className='sm:w-[50%] sm:text-[12vw] text-[14vw] sm:-mt-[10vh] sm:mx-0 mx-8 -mt-5'>Story</h1> */}
    <p className='mx-[2rem] text-3xl text-balance left-10 mt-5'>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
    </div>
    <div className='sm:w-[50%]'>
    <img className='sm:w-[35vw]' autoPlay muted loop src={moon}></img></div>
    </div>
  )
}

export default Footer
