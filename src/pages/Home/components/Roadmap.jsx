import React from 'react'
import RoadmapImg from '../../../assets/home/RoadmapBgImg.png'

const Roadmap = () => {
    return (
        <div className='relative'>
            <img src={RoadmapImg} alt="img" className='w-full object-cover h-full' />
            <div className='absolute bg-black bg-opacity-[76%] h-full  inset-0'>
                <div className='absolute inset-0  lg:space-y-36 bg-cover' style={{ background: 'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 49.06%, #000 100%)' }}>

                    <div className='container  pt-24'>
                        <p className='text-[55px] font-extrabold uppercase text-center'>roadmap</p>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default Roadmap;