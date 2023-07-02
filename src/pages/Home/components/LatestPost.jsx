import React from 'react'
import LetestPostBgImg from '../../../assets/home/LetestPostBg.png'
import LetestPostImg1 from '../../../assets/home/LetestPostImg1.png'
import LetestPostImg2 from '../../../assets/home/LetestPostImg2.png'
import LetestPostImg3 from '../../../assets/home/LetestPostImg3.png'
import MainBackers from './MainBackers'





const Roadmap = () => {
    return (
        <div className='relative'>
            <img src={LetestPostBgImg} alt="Img" className='w-full object-cover h-full' />
            <div className='absolute bg-black bg-opacity-[79%] h-full  inset-0'>
                <div className='absolute inset-0  lg:space-y-36 bg-cover' style={{ background: 'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 49.06%, #000 100%)' }}>

                    <div className='container  pt-36'>
                        <p className='text-[55px] font-extrabold uppercase text-center'>our latest posts</p>


                        <div className=' grid grid-cols-3 gap-8 pt-24'>
                            <div className='h-full'>
                                <img src={LetestPostImg1} alt="img" className='' />
                                <div className='bg-[#141212] flex flex-col gap-5 items-start p-7'>
                                    <p className='text-3xl font-semibold uppercase'>Heritage & History <br />of camel racing</p>
                                    <p className='text-lg text-[#BCBCBC] font-DMSans'>Lorem ipsum dolor sit amet consectetur. Blandit et bibendum odio pellentesque nec vestibulum </p>
                                    <button className='uppercase text-lg font-semibold text-darkGold'>read more</button>
                                </div>
                            </div>

                            <div className='h-full'>
                                <img src={LetestPostImg2} alt="img" className='' />
                                <div className='bg-[#141212] flex flex-col gap-5 items-start p-7'>
                                    <p className='text-3xl font-semibold uppercase'>Heritage & History <br />of camel racing</p>
                                    <p className='text-lg text-[#BCBCBC] font-DMSans'>Lorem ipsum dolor sit amet consectetur. Blandit et bibendum odio pellentesque nec vestibulum </p>
                                    <button className='uppercase text-lg font-semibold text-darkGold'>read more</button>
                                </div>
                            </div>

                            <div className='h-full'>
                                <img src={LetestPostImg3} alt="img" className='' />
                                <div className='bg-[#141212] flex flex-col gap-5 items-start p-7'>
                                    <p className='text-3xl font-semibold uppercase'>Heritage & History <br />of camel racing</p>
                                    <p className='text-lg text-[#BCBCBC] font-DMSans'>Lorem ipsum dolor sit amet consectetur. Blandit et bibendum odio pellentesque nec vestibulum </p>
                                    <button className='uppercase text-lg font-semibold text-darkGold'>read more</button>
                                </div>
                            </div>
                        </div>
                        <MainBackers /> 
                        


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Roadmap;










