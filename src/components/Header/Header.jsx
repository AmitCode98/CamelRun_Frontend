import React, { useState, useEffect, useRef } from 'react'
import { ConnectButton, HeaderLinks, HeaderLogo, HeaderSocials, Profile, Wallet } from './components'
// Hamburger Menu & Close Menu
import { IoMenu, IoClose } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const Header = () => {
    const isConnected = useSelector((state) => state.user.isConnected)
    const headerRef = useRef();
    // For responsive view
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024)
        }
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    // Open / Close Navbar on responsive view
    const [navOpen, setNavOpen] = useState(false)
    const handleNavOpen = () => {
        setNavOpen(!navOpen)
    }

    // Close the responsive view of the NavBar when clicked outside the header component
    useEffect(() => {
        // Add event listener to modal overlay
        const handleOutsideClick = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setNavOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [setNavOpen]);

    return (
        <header
            ref={headerRef}
            className='fixed top-0 inset-x-0 py-4 z-40'
            style={{
                background: 'rgba(58, 52, 52, 0.5)',
                backdropFilter: 'blur(42px)'
            }}
        >
            <nav className='container flex items-center justify-between'>
                <HeaderLogo />
                {isSmallScreen ? (
                    <>
                        {navOpen ? (
                            <IoClose
                                onClick={handleNavOpen}
                                className='text-3xl text-lightGold'
                            />
                        ) : (
                            <IoMenu
                                onClick={handleNavOpen}
                                className='text-3xl text-lightGold'
                            />
                        )}
                    </>
                ) : (
                    <>
                        <HeaderLinks />
                        <div className='flex items-center gap-4'>
                            {isConnected ? (
                                <div className='flex items-center divide-x-2 divide-lightGold'>
                                    <Wallet />
                                    <Profile />
                                </div>
                            ) : (
                                <>
                                    <HeaderSocials />
                                    <ConnectButton />
                                </>
                            )}
                        </div>
                    </>
                )}
            </nav>
            {navOpen && (
                <div className='container space-y-4'>
                    <HeaderLinks />
                    <div className='flex flex-col items-end gap-4'>
                        <HeaderSocials />
                        <ConnectButton />
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header