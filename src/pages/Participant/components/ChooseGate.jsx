import React from 'react'
import Flag from '../../../assets/Logos/flag.png'

const ChooseGate = () => {

    const gates = [
        { gateNo: 1, status: 'closed' },
        { gateNo: 2, status: 'closed' },
        { gateNo: 3, status: 'closed' },
        { gateNo: 4, status: 'closed' },
        { gateNo: 5, status: 'closed' },
        { gateNo: 6, status: 'open' },
    ]

    return (
        <div className='container py-12 space-y-6'>
            <div className='flex items-center gap-4'>
                <img src={Flag} alt="img" className='w-6' />
                <p className='capitalize font-semibold text-xl'>choose a gate to enter</p>
            </div>

            <div className='border-2 border-mediumGold border-dashed py-20 rounded-xl flex flex-wrap justify-center gap-12'>
                {gates.map((item, index) => (
                    <div key={index} className={`flex flex-col items-center gap-1 ${item.status === 'closed' ? 'opacity-50' : ''}`}>
                        <div className={`${item.status === 'closed' ? 'bg-accent' : 'bg-[#4D3C1D]'} px-8 py-1 rounded-2xl text-xl font-semibold`}>
                            {item.gateNo}
                        </div>
                        <p className='text-sm'>{item.status === 'closed' ? 'Closed' : 'Open'}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChooseGate