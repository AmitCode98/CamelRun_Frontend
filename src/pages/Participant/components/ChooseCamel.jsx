import React from 'react'
import CamelImg from '../../../assets/racing/CamelTableIcon.png'
import { MdOutlineSpeed, MdLoop } from 'react-icons/md'
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai'
import { RiVipCrown2Line } from 'react-icons/ri'
import Gender from '../../../assets/Logos/Gender.png'
import { SecondaryButton } from '../../../components'

const ChooseCamel = () => {

    const myCamels = [

    ]

    return (
        myCamels.length !== 0 ? (
            <>
                <div className='container border-2 border-darkGold bg-[#141212] py-32 px-8 rounded-xl flex justify-center'>
                    <div className='grid justify-items-center space-y-4'>
                        <p className='text-xl font-semibold text-center'>You Dont Have Any Camels in Your Stable</p>
                        <p className='text-base text-textGrey text-center'>You need to own a Camel NFT to enter and participate in racing. Choose from our 999 Unique Camels. </p>
                        <button className='bg-gradient p-[1.5px] rounded-md'>
                            <p className='uppercase bg-[#141212] px-4 py-2 rounded-md'>go to marketplace</p>
                        </button>
                    </div>
                </div>
            </>
        ) : (
            <>
                <div className='container border-2 border-darkGold bg-[#141212] rounded-xl p-8 space-y-6'>
                    <p className='text-xl font-semibold'>Choose a Camel to Enter</p>
                    <div className='px-8 py-4 bg-accent2 rounded-lg flex items-center justify-between'>
                            <div className='px-6 py-2 bg-[#141212] rounded-lg flex flex-col items-center gap-1'>
                                <img src={CamelImg} alt="img" className='w-40'/>
                                <p className='text-lg font-medium'>AVENGER</p>
                            </div>

                            <div className='flex-grow flex flex-wrap justify-around gap-6 px-12'>
                                <div className='flex items-center gap-2'>
                                    <MdOutlineSpeed
                                        className='text-2xl text-textGrey'
                                    />
                                    <div>
                                        <p className='text-xs tracking-widest text-lightGold font-semibold uppercase'>Speed</p>
                                        <div className='flex items-center gap-1'>
                                            <div className='w-28 h-1 bg-white rounded-xl'>
                                                <div className='w-20 bg-darkGold h-full rounded-xl'></div>
                                            </div>
                                            <p className='text-xs font-medium text-darkGold'>8/10</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center gap-2'>
                                    <AiOutlineHeart
                                        className='text-2xl text-textGrey'
                                    />
                                    <div>
                                        <p className='text-xs tracking-widest text-lightGold font-semibold uppercase'>Endurance</p>
                                        <div className='flex items-center gap-1'>
                                            <div className='w-28 h-1 bg-white rounded-xl'>
                                                <div className='w-20 bg-darkGold h-full rounded-xl'></div>
                                            </div>
                                            <p className='text-xs font-medium text-darkGold'>8/10</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center gap-2'>
                                    <MdLoop
                                        className='text-2xl text-textGrey'
                                    />
                                    <div>
                                        <p className='text-xs tracking-widest text-lightGold font-semibold uppercase'>Recoverability</p>
                                        <div className='flex items-center gap-1'>
                                            <div className='w-28 h-1 bg-white rounded-xl'>
                                                <div className='w-20 bg-darkGold h-full rounded-xl'></div>
                                            </div>
                                            <p className='text-xs font-medium text-darkGold'>8/10</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center gap-2'>
                                    <MdOutlineSpeed
                                        className='text-2xl text-textGrey'
                                    />
                                    <div>
                                        <p className='text-xs tracking-widest text-lightGold font-semibold uppercase'>Speed</p>
                                        <div className='flex items-center gap-1'>
                                            <div className='w-28 h-1 bg-white rounded-xl'>
                                                <div className='w-20 bg-darkGold h-full rounded-xl'></div>
                                            </div>
                                            <p className='text-xs font-medium text-darkGold'>8/10</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center gap-2'>
                                    <AiOutlineHeart
                                        className='text-2xl text-textGrey'
                                    />
                                    <div>
                                        <p className='text-xs tracking-widest text-lightGold font-semibold uppercase'>Endurance</p>
                                        <div className='flex items-center gap-1'>
                                            <div className='w-28 h-1 bg-white rounded-xl'>
                                                <div className='w-20 bg-darkGold h-full rounded-xl'></div>
                                            </div>
                                            <p className='text-xs font-medium text-darkGold'>8/10</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex items-center gap-2'>
                                    <MdLoop
                                        className='text-2xl text-textGrey'
                                    />
                                    <div>
                                        <p className='text-xs tracking-widest text-lightGold font-semibold uppercase'>Recoverability</p>
                                        <div className='flex items-center gap-1'>
                                            <div className='w-28 h-1 bg-white rounded-xl'>
                                                <div className='w-20 bg-darkGold h-full rounded-xl'></div>
                                            </div>
                                            <p className='text-xs font-medium text-darkGold'>8/10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <SecondaryButton 

                            />
                    </div>
                </div>
            </>
        )
    )
}

export default ChooseCamel