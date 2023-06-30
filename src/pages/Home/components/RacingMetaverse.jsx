import React from 'react'
import RacingMetaImg from '../../../assets/home/RacingMetaImg.png'
import { BsPlayFill } from 'react-icons/bs'
import { PrimaryButton } from '../../../components'
import CamelMetaverseImg from '../../../assets/home/MetaverseFrame.png'
// import CamelMetaverseImg from '../../../assets/home/Vector.png'
// import ImgFream1 from '../../../assets/home/MetaverseFrame1.png'
// import ImgFream2 from '../../../assets/home/MetaverseFrame2.png'

const RacingMetaverse = () => {
    return (
        <div className='relative'>
            <img src={RacingMetaImg} alt="img" className='w-full object-cover h-full' />
            <div className='absolute bg-black bg-opacity-[77%]  inset-0 h-full'>
                {/* <div className='absolute bg-red-500 h-full'> </div> */}
                    <div className='container pt-24 space-y-20'>

                        <p className='text-[55px] font-extrabold uppercase text-center leading-tight'>FIRST OF ITS KIND CAMEL<br /> RACING METAVERSE</p>

                        <div className='grid grid-cols-2 gap-40 pt-[70px]'>
                            <div className='flex flex-col items-start justify-center gap-8'>
                                <p className='uppercase text-[64px] font-extrabold leading-tight'>Unleash the<br /> Power of Desert</p>
                                <p className='text-xl text-textGrey font-medium'>Camel Run is your ticket to experiencing the raw energy and thrill of racing across the sprawling desert landscapes. Feel the adrenaline surge through your veins as you take the reins of magnificent camels, meticulously trained to outpace the competition. It's time to showcase your racing prowess and claim the title of the ultimate desert champion.</p>
                                <PrimaryButton
                                    className={`flex items-center justify-center w-[191px] h-[54px]`}
                                    content={
                                        <>
                                            <BsPlayFill className='text-2xl' />PLAY NOW
                                        </>
                                    }
                                />
                            </div>
                            <div className='relative flex justify-center items-center'>
                                <img src={CamelMetaverseImg} alt="" className='absolute bg-cover ' />
                                {/* <img src={ImgFream1} alt="" className='absolute bg-cover ' />
                            <img src={ImgFream2} alt="" className='absolute bg-cover ' />
                            <img src={CamelMetaverseImg} alt="img" className=' ml-2 mt-3 w-[649px]' /> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
       

    )
}

export default RacingMetaverse