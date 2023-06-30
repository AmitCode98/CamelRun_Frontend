import React, { useState } from 'react'
import GameplayImg from '../../../../src/assets/home/Gameplay.png'
import { BsPlayFill } from 'react-icons/bs'
import { PrimaryButton } from '../../../components'
import GameplayImg2 from '../../../assets/home/GameplayImg.png'
import NewsTicker from './NewsTicker'
import GameplayVideo from '../../../assets/videos/CamelRun_Trailer.mp4'


const Gameplay = () => {
    const [active, setActive] = useState('racing')
    const cat = [
        {
            title: 'RACE YOUR WAY<br /> TO THE TOP',
            des: 'Camel Run isn\'t just another game; it\'s a gateway<br /> to boundless opportunities. Every race you<br /> conquer, every challenge you overcome, and<br /> every milestone you reach brings you closer to<br /> substantial rewards.',
            link: '',
            img: GameplayImg2,
            category: 'racing'
        },
        {
            title: 'Predict the<br/> winner & earn',
            des: 'Camel Run isn\'t just another game; it\'s a gateway<br /> to boundless opportunities. Every race you<br /> conquer, every challenge you overcome, and<br /> every milestone you reach brings you closer to<br /> substantial rewards.',
            link: '',
            img: GameplayImg2,
            category: 'prediction'
        }
    ]

    const filterCat = cat.filter((item) => item.category === active)
    return (

        <>
            <div className='relative z-10'>
                <NewsTicker />
                <img src={GameplayImg} alt="img" />
                <div className='absolute inset-0 bg-black bg-opacity-[88%] z-20'>
                    <div className='container pt-52 space-y-28'>
                        <div className='text-center space-y-8'>
                            <p className='text-[55px] font-extrabold uppercase'>Gameplay</p>
                            <p className='text-xl text-textGrey font-medium'>Camel Run isn't just another game; it's a gateway to boundless opportunities. Every race you conquer, every<br /> challenge you overcome, and every milestone you reach brings you closer to substantial rewards. With our <br />play-to-earn model, your dedication.</p>
                        </div>

                        <div className='space-y-6'>
                            <div className='flex space-x-7'>
                                {['racing', 'prediction'].map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => { setActive(item) }}
                                        className={`py-2 uppercase border-b-2  text-2xl ${active === item ? `border-darkGold text-darkGold font-bold  ` :'text-gray-400 font-medium border-transparent'}`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>

                            {filterCat.map((item, index) => (
                                <div key={index} className=' grid gap-5 justify-items-start'>
                                    <p className='text-[64px] font-extrabold uppercase leading-tight ' dangerouslySetInnerHTML={{ __html: item.title }}></p>
                                    <p className='text-xl text-textGrey font-medium' dangerouslySetInnerHTML={{ __html: item.des }}></p>
                                    <PrimaryButton
                                        className={`flex items-center justify-center w-[191px] h-[54px]`}
                                        content={
                                            <>
                                                <BsPlayFill className='text-2xl' />PLAY NOW
                                            </>
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='absolute right-0 top-[40%] w-[50rem] bg-gradient py-[1px] pl-[1.5px] clip-path-custom-shape'>
                        {active === `racing` ? (
                            // <img src={GameplayImg2} alt="img" className='' />
                            <>
                            <video src={GameplayVideo} className='clip-path-custom-shape'></video>
                            </>
                        ) : (
                            <>
                             <video src={GameplayVideo} className='clip-path-custom-shape'></video>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Gameplay;

























