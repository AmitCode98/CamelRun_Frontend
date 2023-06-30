import React from 'react'
import { MdOutlineSpeed, MdLoop } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'
import Flag from '../../../assets/Logos/flag.png'
import CamelImg from '../../../assets/racing/CamelTableIcon.png'

const Participants = () => {

    const raceTracks = [
        {
            track: 'Neo-Dubai',
            startTime: '2h 22m',
            eventType: 'Racing',
            distance: '2200M',
            entryFee: 'FREE',
            price: '0.09ETH',
            gates: '12/13'
        },
        {
            track: 'Neo-Dubai',
            startTime: '2h 22m',
            eventType: 'Racing',
            distance: '2200M',
            entryFee: 'FREE',
            price: '0.09ETH',
            gates: '12/13'
        },
        {
            track: 'Neo-Dubai',
            startTime: '2h 22m',
            eventType: 'Racing',
            distance: '2200M',
            entryFee: 'FREE',
            price: '0.09ETH',
            gates: '12/13'
        },
        {
            track: 'Neo-Dubai',
            startTime: '2h 22m',
            eventType: 'Racing',
            distance: '2200M',
            entryFee: '0.1ETH',
            price: '0.09ETH',
            gates: '12/13'
        },
        {
            track: 'Neo-Dubai',
            startTime: '2h 22m',
            eventType: 'Racing',
            distance: '2200M',
            entryFee: 'FREE',
            price: '0.09ETH',
            gates: '12/13'
        },
        {
            track: 'Neo-Dubai',
            startTime: '2h 22m',
            eventType: 'Racing',
            distance: '2200M',
            entryFee: 'FREE',
            price: '0.09ETH',
            gates: '12/13'
        },
    ]

    return (
        <div className='py-12 container'>
            <p className='text-2xl font-semibold'>Participants</p>
            <table className='w-full divide-y divide-[#fff] divide-opacity-40 my-8'>
                <thead>
                    <tr className='flex justify-between  py-2'>
                        {['gate no.', 'camel', 'stats', 'races own', 'win streak', 'win %'].map((item, index) => {
                            return (
                                <td key={index} className={`w-full uppercase text-textGrey text-center ${index === 2 ? 'w-[140%]' : ''}`}>{item}</td>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className='divide-y divide-[#fff] divide-opacity-10'>
                    {raceTracks.map((item, index) => (
                        <tr key={index} className={`flex items-center justify-between py-4 `}>
                            <td className='w-full flex justify-center gap-2'>
                                <img src={Flag} alt="img" className='w-6'/>
                                <p className='font-medium'>{index + 1}</p>
                            </td>

                            <td className='w-full grid justify-items-center gap-2'>
                                <img src={CamelImg} alt="img" />
                                <p className=' text-lg font-medium uppercase'>Avenger</p>
                            </td>

                            <td className='w-[140%] space-y-2 grid justify-items-center'>
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
                            </td>

                            <td className='w-full text-center font-medium text-lg'>
                                &gt;50
                            </td>

                            <td className='w-full text-center font-medium text-lg'>
                                3
                            </td>

                            <td className='w-full text-center font-medium text-lg text-mediumGold'>
                                20%
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Participants