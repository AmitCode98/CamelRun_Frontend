import React from 'react'
import BackersImg1 from '../../../assets/home/BackersImg/BackersImg1.png'
import BackersImg2 from '../../../assets/home/BackersImg/BackersImg2.png'
import BackersImg3 from '../../../assets/home/BackersImg/BackersImg3.png'
import BackersImg4 from '../../../assets/home/BackersImg/Backersimg4.png'
import BackersImg5 from '../../../assets/home/BackersImg/BackersImg5.png'
import BackersImg6 from '../../../assets/home/BackersImg/BackersImg6.png'
import BackersImg7 from '../../../assets/home/BackersImg/Backersimg7.png'
import BackersImg8 from '../../../assets/home/BackersImg/BackersImg8.png'
import BackersImg9 from '../../../assets/home/BackersImg/BackersImg9.png'
import BackersImg10 from '../../../assets/home/BackersImg/BackersImg10.png'
import Community from './Community'


const MainBackers = () => {
    return (
        <div className='pt-48'>
            <p className='text-[55px] font-extrabold uppercase text-center'>main backers</p>
            <div className='grid grid-cols-5 justify-items-center gap-y-24 gap-x-36 pt-32  w-full'>
                <img src={BackersImg1} alt="img" className='' />
                <img src={BackersImg2} alt="img" />
                <img src={BackersImg3} alt="img" />
                <img src={BackersImg4} alt="img" />
                <img src={BackersImg5} alt="img" />
                <img src={BackersImg6} alt="img" />
                <img src={BackersImg7} alt="img" />
                <img src={BackersImg8} alt="img" />
                <img src={BackersImg9} alt="img" />
                <img src={BackersImg10} alt="img" />
                {/* <img src={BackersImg9} alt="" /> */}
                {/* <img src={BackersImg1} alt="" /> */}
            </div>
            <Community/>

            
        </div>
        
    )
}

export default MainBackers;

