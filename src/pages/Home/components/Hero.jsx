import React from 'react'
import TextBg from '../../../assets/home/TextBG.jpg'
import HeroImg from '../../../assets/home/HeroImg.png'
// import HeroIcon from '../../../assets/home/HeroDownIcon.png'
import { BsPlayFill } from 'react-icons/bs'
import { PrimaryButton } from '../../../components'
// import { Hero} from '../../../pages/Home/components/Hero.c ss?inline'

const Hero = () => {
    return (
        <div className='relative w-full'>
            <img src={HeroImg} alt="img" className='w-full h-full   object-cover'/>
            <div className='absolute inset-0  pt-[30%] md:pt-[15%] space-y-20 lg:space-y-36 bg-cover' style={{ background:'linear-gradient(90deg, rgba(0, 0, 0, 0.93) 0%, rgba(0, 0, 0, 0.22) 48.58%, rgba(0, 0, 0, 0.00) 100%)'}}>
                <div className=' container grid space-y-6'>
                    <p className='bg-gradient text-transparent bg-clip-text text-xl font-semibold uppercase tracking-widest '>Welcome to camel run</p>
                    <p
                        className='text-6xl font-extrabold uppercase '
                        style={{
                            background: `url(${TextBg})`,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent'
                        }}
                    >
                        legends of the <br/>
                    </p>
                    <p className='text-lg  font-semibold'>
                        CAMEL RUN coexists in the Camel Racing, metaverse, and <br /> gaming worlds. Camel Run, a first-mover advantage has<br />been established in a trending market with the mission to <br /> establish Camel ownership for the masses and gamify
                    </p>
                    <PrimaryButton
                        content={
                            <>
                                <BsPlayFill className='text-2xl' />PLAY NOW
                            </>
                        }
                        className={`flex items-center justify-center w-36 h-14`}
                    />
                </div>
            </div>
        </div>

        //Previous desigen
        // <div className='relative w-full'>
        //     <img src={HeroImg} alt="img" className='w-full h-full lg:max-h-screen object-cover'/>
        //     <div className='absolute inset-0  pt-[30%] md:pt-[15%] space-y-20 lg:space-y-36 bg-cover' style={{ background:'linear-gradient(90deg, rgba(0, 0, 0, 0.93) 0%, rgba(0, 0, 0, 0.22) 48.58%, rgba(0, 0, 0, 0.00) 100%)'}}>
        //         <div className=' container grid space-y-6'>
        //             <p className='bg-gradient text-transparent bg-clip-text text-2xl font-semibold uppercase tracking-widest '>Welcome to camel run</p>
        //             <p
        //                 className='text-7xl font-extrabold uppercase '
        //                 style={{
        //                     background: `url(${TextBg})`,
        //                     backgroundClip: 'text',
        //                     WebkitBackgroundClip: 'text',
        //                     color: 'transparent'
        //                 }}
        //             >
        //                 legends of the <br/> sand
        //             </p>
        //             <p className='text-xl  font-semibold'>
        //                 CAMEL RUN coexists in the Camel Racing, metaverse, and <br /> gaming worlds. Camel Run, a first-mover advantage has<br />been established in a trending market with the mission to <br /> establish Camel ownership for the masses and gamify
        //             </p>
        //             <PrimaryButton
        //                 content={
        //                     <>
        //                         <BsPlayFill className='text-2xl' />PLAY NOW
        //                     </>
        //                 }
        //                 className={`flex items-center justify-center w-[191px] h-[54px]`}
        //             />
        //         </div>
        //     </div>
        // </div>
    )
}

export default Hero