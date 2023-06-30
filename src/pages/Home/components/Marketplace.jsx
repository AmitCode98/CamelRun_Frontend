import React from 'react'
import MarketplaceImg from '../../../assets/home/MarketplaceImg.png'
// import MarketplaceImg2 from '../../../assets/home/MarketplaceImg2.png'
import MarketImg1 from '../../../assets/home/MetaverseFrame1.png'
import MarketImg2 from '../../../assets/home/MetaverseFrame2.png'
import { BsPlayFill } from 'react-icons/bs'
import { PrimaryButton } from '../../../components'

const Marketplace = () => {
    return (
        <>
            <div className='relative'>
                <img src={MarketplaceImg} alt="img" className='w-full object-cover h-full' />
                <div className='absolute bg-black bg-opacity-[90%]  inset-0 h-full'>
                    <div className=' absolute h-full w-full' style={{background: 'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 49.06%, #000 100%)'}}>

                        <div className='container pt-24 space-y-20'>

                            <p className='text-[55px] font-extrabold uppercase text-center'>MARKETPLACE</p>

                            <div className='grid grid-cols-2 gap-8'>
                                <div className='relative'>
                                    <img src={MarketImg1} alt="img" className='absolute' />
                                    <img src={MarketImg2} alt="img" className='' />
                                </div>
                                <div className='flex flex-col items-start justify-center gap-8'>
                                    <p className='text-[64px] font-extrabold uppercase leading-tight'>999 UNIQUE CAMEL<br /> NFT’S</p>
                                    <p className='text-xl text-textGrey font-medium'>Camel Run is your ticket to experiencing the raw energy and thrill of racing across the sprawling desert landscapes. Feel the adrenaline surge through your veins as you take the reins of magnificent camels, meticulously trained to outpace the competition. It's time to showcase your racing prowess and claim the title of the ultimate desert champion.</p>
                                    <PrimaryButton
                                        className={`flex items-center justify-center w-[191px] h-[54px]`}
                                        content={
                                            <>
                                                <BsPlayFill className='text-2xl' />MARKETPLACE
                                            </>
                                        }
                                    />
                                </div>


                            </div>
                        </div>

                    </div>

                </div>
            </div>




        </>
    )
}

export default Marketplace;