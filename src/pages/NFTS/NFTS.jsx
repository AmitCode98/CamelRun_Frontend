import React, { useState } from 'react'
import { CamelNfts } from '../../constants'
import { NFTModal } from '../../modals'
import { FilterNfts, NFTCard } from './components'

const NFTS = () => {

    const category = [
        { name: 'All', state: 'All' },
        { name: 'Omania (Oman)', state: 'Omania' },
        { name: 'Hainiyat (Saudi Arabia)', state: 'Hainiyat' },
        { name: 'Mahaliyat (UAE)', state: 'Mahaliyat' },
    ]

    const [selectedCategory, setSelectedCategory] = useState('All')
    const filteredNfts = selectedCategory === 'All' ? CamelNfts : CamelNfts.filter(nft => nft.category === selectedCategory)
    const totalNfts = filteredNfts.length
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const [selectedCard, setSelectedCard] = useState('')
    const handleClick = (nft) => {
        setSelectedCard(nft)
    }

    // Modal Function
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <section className='mt-28 container'>
            <div className='flex items-center justify-between'>
                <p className='text-lg font-medium'>{selectedCategory} ({totalNfts})</p>
                <FilterNfts
                    category={category}
                    handleCategoryChange={handleCategoryChange}
                />
            </div>
            <div className='py-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {filteredNfts.map((item, index) => (
                    <NFTCard
                        key={index}
                        img={item.imgSrc}
                        title={item.title}
                        cost={item.cost}
                        onClick={() => {handleClick(item); openModal()}}
                    />
                ))}
            </div>
            <NFTModal 
                isOpen={isOpen}
                closeModal={closeModal}
                selectedNft={selectedCard}
            />
        </section>
    )
}

export default NFTS