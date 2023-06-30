import React from 'react'
import { ChooseCamel, ChooseGate, Participants, RaceDetails, UpcomingRaces } from './components'

const Participant = () => {
    return (
        <div className='mt-20'>
            <RaceDetails />
            <ChooseGate />
            <Participants />
            <ChooseCamel />
            <UpcomingRaces />
        </div>
    )
}

export default Participant