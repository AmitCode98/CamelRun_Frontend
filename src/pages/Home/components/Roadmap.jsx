import React from 'react'
import RoadmapImg from '../../../assets/home/RoadmapBgImg.png'
import LineImg from '../../../assets/home/RoadmapImg/LineImg.png'

const Roadmap = () => {

    const roadmap = [
        {
            title: 'Q1 - 2023',
            list: [
                'NFT Collection',
                'Token Launch',
                'Predict to Earn'
            ]
        },
        {
            title: 'Q2 - 2023',
            list: [
                'Referral Dashboard',
                'Tournament/ Leaderboard',
                'Marketplace',
                'Watch to Earn'
            ]
        },
        {
            title: 'Q3 - 2023',
            list: [
                'Map Extensions',
                'Sponsored Races',
                'Game Assets',
                'PVP'

            ]
        },
        {
            title: 'Q4 - 2023',
            list: [
                'Profile Improvement',
                'Mobile Game',
                'Personalized Skins',
                'In App Crypto Wallet'
            ]
        },
        {
            title: 'Q1 - 2024',
            list: [
                'Metaverse Introduction',
                'Virtual Farms',
                'Premium NFT’S',
                'Co-Ownership & Rentals'
            ]
        },
        {
            title: 'Q2 - 2024',
            list: [
                'Metaverse Expansion',
                'Loan System',
                'Premium NFT’S',
                'Bloodlines'
            ]
        },
        {
            title: 'Q3 - 2024',
            list: [
                'Jockey NFT’S',
                'Custom Map Building',
                'Automated Gameplay',
                'Fiat Currency Integration'

            ]
        },
    ]

    return (
        <div className='relative'>
            <img src={RoadmapImg} alt="img" className='w-full object-cover h-full' />
            <div className='absolute bg-black bg-opacity-[76%] h-full  inset-0'>
                <div className='absolute inset-0  lg:space-y-36 bg-cover' style={{ background: 'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 49.06%, #000 100%)' }}>

                    <div className='container  pt-24'>
                        <p className='text-[55px] font-extrabold uppercase text-center'>roadmap</p>
                        <div className=' w-[75%] mx-auto mt-72 relative'>
                            {/* <img src={LineImg} alt="Img" className='absolute left-[50%] translate-x-[-50%] z-0' /> */}
                            <div className='absolute bg-gradient w-[2px] h-full left-[50%] translate-x-[-50%]'></div>
                            {roadmap.map((item, index) => (
                                <div key={index} className={`flex  ${index % 2 !== 0 ? 'justify-start flex-row-reverse' : ''}`}>
                                    <div className={`w-[50%] flex items-center ${index % 2 !== 0 ? ' flex-row-reverse' : ''}`}>
                                        <div className=' border-2 border-darkGold w-1/2 p-10 rounded-[0.86869rem] bg-[#2C2727] opacity-[60%] backdrop-blur-sm '>
                                            <p className=' pb-10 text-darkGold font-extrabold text-lg'>{item.title}</p>
                                            <ul className=' list-disc list-inside font-semibold text-xs text=[#FAFAFA] opacity-[72%] flex flex-col gap-5 '>
                                                {item.list.map((i, j) => (
                                                    <li key={j}>{i}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className='relative bg-gradient w-1/2 h-[2px]'>
                                            <div className={`absolute w-3 h-3 bg-gradient  ${index % 2 !== 0 ? '-left-1.5' : '-right-1.5'} top-[50%] translate-y-[-50%] rounded-full`}>
                                                <div className='absolute w-8 h-8 bg-gradient rounded-full opacity-30 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]'>
                                                </div>
                                                <div className='absolute w-8 h-8 rounded-full bg-gradient left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]' style={{ filter: 'blur(20px)' }}></div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default Roadmap;