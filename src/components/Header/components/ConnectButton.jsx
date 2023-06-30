import React, { useState } from 'react'
import { ConnectWalletModal } from '../../../modals'
import PrimaryButton from '../../PrimaryButton'

const ConnectButton = () => {

    // Modal Functions
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <PrimaryButton
                task={openModal}
                content={`Connect`}
                className={`w-[148px] h-[50px]`}
            />
            <ConnectWalletModal 
                isOpen={isOpen}
                closeModal={closeModal}
            />
        </>
    )
}

export default ConnectButton