import React from 'react'
import FarmImg from '../../../assets/racing/YourFarm.png'
import { PrimaryButton } from '../../../components'

const CreateFarm = () => {
    return (
        <div className='container my-8 relative min-h-[250px]'>
            <img src={FarmImg} alt="img" className='rounded-xl min-h-[250px] object-cover' />
            <div
                className='absolute inset-0 rounded-xl flex flex-col justify-center items-start pl-4 lg:pl-12 gap-4'
                style={{ background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.81) 0.64%, rgba(0, 0, 0, 0) 55.43%)' }}
            >
                <p className='text-3xl font-extrabold uppercase'>create your farm</p>
                <p>Become a camel owner and start <br />racing now to win!</p>
                <PrimaryButton
                    content={`COMING SOON`}
                />
            </div>
        </div>
    )
}

export default CreateFarm