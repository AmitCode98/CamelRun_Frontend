import React from 'react'
import WalletImg from '../../../assets/Logos/wallet.png'

const Wallet = () => {
    return (
        <div className='mx-2 flex items-center gap-2'>
            <img src={WalletImg} alt="img" className='w-6'/>
            <p className='text-lg font-medium text-lightGold'>100$</p>
        </div>
    )
}

export default Wallet