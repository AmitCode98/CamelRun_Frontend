import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AllRaces, Home, NFTS, Participant, Racing } from '../pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/nfts' element={<NFTS />}/>
            <Route path='/racing' element={<Racing />}/>
            <Route path='/racing/all-races' element={<AllRaces />}/>
            <Route path='/racing/participant' element={<Participant />}/>
        </Routes>
    )
}

export default AppRoutes