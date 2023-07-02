import React from 'react'
// import { AiFillYoutube } from 'react-icons/ai';
// import { BsTelegram } from 'react-icons/bs';
// import { BsDiscord } from 'react-icons/bs';
// import { BsTwitter } from 'react-icons/bs';
// import { BsInstagram } from 'react-icons/bs';
// import { BsFacebook } from 'react-icons/bs';
import IconBorderImg from '../../../assets/home/CommunityIconsImg/BorderImg.png'
import YoutubeImg from '../../../assets/home/CommunityIconsImg/YoutubeIcon.png'
import TelegramImg from '../../../assets/home/CommunityIconsImg/TelegramIcon.png'
import DiscordImg from '../../../assets/home/CommunityIconsImg/DiscordIcon.png'
import TwitterImg from '../../../assets/home/CommunityIconsImg/TwitterIcon.png'
import InstagramImg from '../../../assets/home/CommunityIconsImg/InstagramIcon.png'
import FacebookImg from '../../../assets/home/CommunityIconsImg/FacebookIcon.png'

const Community = () => {
    return (
        <div className='pt-48'>
            <p className='text-[55px] font-extrabold uppercase text-center'>join the community</p>


            <div className='flex gap-7 pt-28' >
                <div className='relative w-[231px] h-[193px] '>
                    <img src={IconBorderImg} alt="Img" className='absolute ' />
                    <div className='h-full flex flex-col justify-center items-center'>
                        <img src={YoutubeImg} alt="Img" className='w-[70px]' />
                        <p className='uppercase text-xl font-semibold bg-gradient text-transparent bg-clip-text'>Youtube</p>
                    </div>
                </div>
                <div className='relative w-[231px] h-[193px] '>
                    <img src={IconBorderImg} alt="Img" className='absolute ' />
                    <div className='h-full flex flex-col justify-center items-center'>
                        <img src={TelegramImg} alt="Img" className='w-[70px]' />
                        <p className='uppercase text-xl font-semibold bg-gradient text-transparent bg-clip-text'>Telegram</p>
                    </div>
                </div>
                <div className='relative w-[231px] h-[193px] '>
                    <img src={IconBorderImg} alt="Img" className='absolute ' />
                    <div className='h-full flex flex-col justify-center items-center'>
                        <img src={DiscordImg} alt="Img" className='w-[70px]' />
                        <p className='uppercase text-xl font-semibold bg-gradient text-transparent bg-clip-text'>discord</p>
                    </div>
                </div>
                <div className='relative w-[231px] h-[193px] '>
                    <img src={IconBorderImg} alt="Img" className='absolute ' />
                    <div className='h-full flex flex-col justify-center items-center'>
                        <img src={TwitterImg} alt="Img" className='w-[70px]' />
                        <p className='uppercase text-xl font-semibold bg-gradient text-transparent bg-clip-text'>twitter</p>
                    </div>
                </div>
                <div className='relative w-[231px] h-[193px] '>
                    <img src={IconBorderImg} alt="Img" className='absolute ' />
                    <div className='h-full flex flex-col justify-center items-center'>
                        <img src={InstagramImg} alt="Img" className='w-[70px]' />
                        <p className='uppercase text-xl font-semibold bg-gradient text-transparent bg-clip-text'>instagram</p>
                    </div>
                </div>
                <div className='relative w-[231px] h-[193px] '>
                    <img src={IconBorderImg} alt="Img" className='absolute ' />
                    <div className='h-full flex flex-col justify-center items-center'>
                        <img src={FacebookImg} alt="Img" className='w-[70px]' />
                        <p className='uppercase text-xl font-semibold bg-gradient text-transparent bg-clip-text'>facebook</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community;


            