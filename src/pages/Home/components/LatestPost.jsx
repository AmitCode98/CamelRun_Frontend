import React from 'react'
import LetestPostImg from '../../../assets/home/LetestPostBg.png'

const Roadmap = () => {
    return (
        <div className='relative'>
           <img src={LetestPostImg} alt="Img" className='w-full object-cover h-full' />
           <div className='absolute bg-black bg-opacity-[79%] h-full  inset-0'>
                <div className='absolute inset-0  lg:space-y-36 bg-cover' style={{ background: 'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 49.06%, #000 100%)' }}>

                    <div className='container  pt-24'>
                        <p className='text-[55px] font-extrabold uppercase text-center'>our latest posts</p>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default Roadmap;