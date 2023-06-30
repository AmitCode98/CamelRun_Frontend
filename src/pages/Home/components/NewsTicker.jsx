import React from 'react'
import NewsTickerLogo from '../../../assets/home/NewsLogo.png'

const NewsTicker = () => {

    const scrollCount = 4;

    return (
        <div className=' shadow-none transform -rotate-[1.5deg] absolute z-50 w-full ' style={{ backgroundColor: 'rgba(77, 60, 29, 0.60)', borderTop: '2px solid  #FFE1AB', borderBottom: '2px solid #FFE1AB', backdropFilter: 'blur(37px)' }}>
            <div className='flex w-full items-center whitespace-nowrap gap-32 overflow-x-auto'>
              {Array.from({length:scrollCount}).map((_,index)=>(
                <div className="flex items-center scroll-left">
                <img src={NewsTickerLogo} alt="img" className='w-[80px] h-[80px] mr-8 ' />
                <p style={{ color: "rgba(255, 255, 255, 0.70)" }} className='uppercase font-extrabold text-4xl  '>PLAY TO EARN ECOSYSTEM</p>
            </div>
              ))}
            </div>
        </div>

        // <h1>News Ticker</h1>

    )
}
export default NewsTicker;




