import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const HeaderLinks = () => {

    const location = useLocation()

    const links = [
        { title: 'home', link: '/' },
        { title: 'nfts', link: '/nfts' },
        { title: 'racing', link: '/racing' },
        { title: 'blogs', link: '/blogs' },
        { title: 'explore', link: '/explore' },
    ]

    // Function to store the route of the page on refresh
    function getActiveLink(pathname) {
        const link = links.find(item => item.link === pathname);
        return link ? link.title : 'home';
    }

    const [active, setActive] = useState(getActiveLink(location.pathname))

    return (
        <ul
            className='flex max-lg:flex-col max-lg:items-end lg:items-center gap-6 lg:gap-8 max-lg:mt-8 lg:ml-12'
        >
            {links.map((item, index) => (
                <Link
                    to={item.link}
                    key={index}
                    onClick={() => setActive(item.title)}
                    className={`uppercase font-medium text-lightGold hover:text-mediumGold ${active === item.title ? 'text-mediumGold' : ''} transition-all ease-in-out`}
                >
                    {item.title}
                </Link>
            ))}
        </ul>
    )
}

export default HeaderLinks