import React from 'react'
import { Hero, Welcome, RacingMetaverse, Gameplay, Marketplace, Roadmap, LatestPost } from './components'

const Home = () => {
    return (
        // {/* <div className='flex flex-col'> */}
        <div className=''>
            <Hero />
            <Welcome />
            <RacingMetaverse />
            {/* <NewsTicker /> */}
            <Gameplay />
            <Marketplace/>
            <Roadmap/>
            <LatestPost/>
        </div>
    )
}

export default Home;