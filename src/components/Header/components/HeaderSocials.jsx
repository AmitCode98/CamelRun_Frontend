import React from 'react'
// Socials Logo
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaDiscord, FaTelegramPlane, FaMediumM } from 'react-icons/fa'

const HeaderSocials = () => {

    const socials = [
        { icon: <AiOutlineTwitter />, link: '/' },
        { icon: <FaDiscord />, link: '/' },
        { icon: <FaTelegramPlane />, link: '/' },
        { icon: <FaMediumM />, link: '/' },
    ]

    return (
        <div className='flex gap-3'>
            {socials.map((item,index) => (
                <a
                    key={index}
                    href={item.link}
                    className={`text-lg text-lightGold`}
                >
                    {item.icon}
                </a>
            ))}
        </div>
    )
}

export default HeaderSocials