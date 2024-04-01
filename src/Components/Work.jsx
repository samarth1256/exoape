import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Work() {
   const [elems,setElems]=useState([
        {heading:"PixelFlakes", subheading:"Architectural Marketing Agency", video:"https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076", image:"https://a.storyblok.com/f/133769/2880x3588/5c50befb8e/pixel-flakes-hero.jpg/m/1300x1620/filters:format(webp):quality(70)"},
        {heading:"Rino & Pelle", subheading:"Effortless chic lifestyle", video:"https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b", image:"https://a.storyblok.com/f/133769/2500x3113/78edf86efd/rino-pelle-hero.jpg/m/1300x1619/filters:format(webp):quality(70)"},
        {heading:"Aebele Interiors", subheading:"Luxurious design experience", video:"https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15", image:"https://a.storyblok.com/f/133769/1606x2000/09a30057bd/aebele-interiors-hero.jpg/m/1300x1619/filters:format(webp):quality(70)"},
        {heading:"Studio D", subheading:"Urban and Landscape design", video:"https://player.vimeo.com/progressive_redirect/playback/914798702/rendition/720p/file.mp4?loc=external&log_user=0&signature=b76cb0994de6beca7f6ba29e7eb52db1750d34600352dab2566c6ca16fcd817f", image:"https://a.storyblok.com/f/133769/2409x3000/b5ccf4619b/studio-d-hero.jpg/m/1300x1619/filters:format(webp):quality(70)"}
    ])
  return (
    <div className='w-full relative'>
      <div className='max-w-screen-2xl mx-auto py-20 px-5 sm:px-10'>
        <div className='featured flex gap-3'>
        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
            <h1 className='capitalize'>featured projects</h1>
        </div>
        <div className='text-6xl my-5 sm:text-[13rem] sm:tracking-tight sm:leading-none overflow-hidden'>
          <motion.span initial={{rotate:90,y:"40%",opacity:0}} whileInView={{rotate:0,y:0,opacity:1}} transition={{ease:[0.22,1,0.36,1],duration:0.8}} className='inline-block origin-left'>Work</motion.span></div>
        <p className='leading-2 text-md'>Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>
      <div className='elems mt-10 sm:flex sm:flex-wrap sm:gap-5'>
            {elems.map((item,index)=>{
               return <div key={index} className='elem w-full mt-10 sm:w-[48%]'>
            <div className='w-full video h-[104vw] sm:h-[50vw] relative overflow-hidden'> 
                <motion.img initial={{opacity:1}} whileHover={{opacity:0}} data-scroll data-scroll-speed="-.5" className='hidden sm:absolute z-[2] sm:top-0 sm:left-0 sm:block h-full w-full object-cover' src={item.image}/>
                <video autoPlay muted loop className='block z-[1] h-full w-full absolute scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={item.video}/>
            </div>
            <div className='mt-4'>
                <h3 className='font-semibold'>{item.heading}</h3>
                <p className='capitalize opacity-40'>{item.subheading}</p>
            </div>
        </div>
            })}
        
      </div>
      </div>
    </div>
  )
}

export default Work
