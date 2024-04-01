import gsap, { Linear, ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

const Images = () => {
    const first=useRef(null);
    const second=useRef(null);
    const third=useRef(null);
    const fourth=useRef(null);
    const parent=useRef(null);

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:parent.current,
                start:"0 0",
                scrub:1
            }
        })
        tl.to(first.current,{
            x:"50%",
            ease:Linear
        },'a')
        .to(second.current,{
            x:"-40%",
            ease:Linear
        },'a')
        .to(third.current,{
            x:"-40%",
            ease:Linear
        },'a')
        .to(fourth.current,{
            x:"40%",
            ease:Linear
        },'a')
    },[])
  return (
    <div ref={parent} className='w-full h-[70vh] sm:h-[100vh] bg-white flex justify-center items-center'>
        <div className='w-[40%] sm:w-[25%] sm:h-[80%] h-1/2 relative'>
            <div ref={first} className='absolute sm:w-40 sm:h-[15rem] w-20 h-[7rem] -right-1/3 top-6'>
                <img className='w-full h-full object-cover' src='https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/550x781/filters:format(webp):quality(70)'></img>
            </div>
            <div ref={second} className='absolute w-[8rem] sm:w-[18rem] aspect-video -left-1/2 sm:-left-2/3 top-1/3 overflow-hidden'>
                <video autoPlay loop muted className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4'/>
            </div>
            <div ref={third} className='absolute w-[6rem] sm:w-[20rem] aspect-video -left-[50%] sm:-left-[90%] -bottom-10'>
                <img className='w-full h-full object-cover' src='https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/550x369/filters:format(webp):quality(70)'/>
            </div>
            <div ref={fourth} className='absolute w-[10rem] sm:w-[30rem] aspect-[1.5/1] -right-[70%] sm:-right-[60%] -bottom-[37%] sm:-bottom-[40%]'>
                <video autoPlay muted loop className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4'/>
            </div>
            <img className='w-full h-full object-cover' src='https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/550x940/filters:format(webp):quality(70)'></img>
        </div>
      
    </div>
  )
}

export default Images
