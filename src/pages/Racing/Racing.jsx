import React from 'react'
import { Breeding, CreateFarm, NextToRun, RaceTracks, StreamingNow } from './components'

const Racing = () => {
    return (
        <div className='mt-28'>
            <StreamingNow />
            <RaceTracks />
            <NextToRun />
            <CreateFarm />
            <Breeding />
        </div>
    )
}

export default Racing