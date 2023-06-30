import React from 'react'
import HeaderImg from '../../../assets/racing/headerImg1.png'

const RaceDetails = () => {

    const raceDetails = {
        distance: '2200M',
        status: 'Open',
        entryFee: 'Free',
        regEnds: '2h 22m'
    }

    return (
        <div className='relative'>
            <img src={HeaderImg} alt="img" className='w-full max-lg:min-h-[250px]' />
            <div className='absolute inset-0 bg-black bg-opacity-[68%] flex items-center'>
                <div className='container flex max-md:flex-col max-md:gap-8 justify-between'>
                    <div className='space-y-4'>
                        <p className='text-3xl font-bold'>Neo Dubai - Racing</p>
                        <div className='flex items-center flex-wrap gap-8'>
                            <p className='text-textGrey font-medium'>Distance: <span className='text-white font-semibold'>{raceDetails.distance}</span></p>
                            <p className='text-textGrey font-medium'>Status: <span className='text-white font-semibold'>{raceDetails.status}</span></p>
                            <p className='text-textGrey font-medium'>Entry Fee: <span className='text-mediumGold bg-accent p-1 rounded'>{raceDetails.entryFee}</span></p>
                            <p className='text-textGrey font-medium'>Registration Ends: <span className='text-white font-semibold'>{raceDetails.regEnds}</span></p>
                        </div>
                    </div>
                    <div className='md:space-y-4 flex items-center max-md:justify-between md:flex-col md:items-end'>
                        <p className='text-green-600 font-semibold text-2xl'>0.99ETH + XP</p>
                        <p className='font-semibold'>05/06 Registered</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RaceDetails