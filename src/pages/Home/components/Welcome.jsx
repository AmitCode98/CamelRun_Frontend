// import React, { useEffect, useRef } from 'react'
// import BgImg from '../../../assets/home/AboutImg.png'
// import TrailerVideo from '../../../assets/videos/CamelRun_Trailer.mp4'
// import Frame1 from '../../../assets/home/AboutFrame1.png'
// import Frame2 from '../../../assets/home/AboutFrame2.png'

// const Welcome = () => {

//     const videoRef = useRef(null);

//     useEffect(() => {
//         const videoElement = videoRef.current;
//         const intersectionObserver = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         playVideoWithSound(videoElement);
//                     } else {
//                         pauseVideo(videoElement);
//                     }
//                 });
//             },
//             { threshold: 0.5 } // Adjust the threshold as needed
//         );

//         intersectionObserver.observe(videoElement);

//         return () => {
//             intersectionObserver.unobserve(videoElement);
//         };
//     }, []);

//     const playVideoWithSound = (videoElement) => {
//         videoElement.play();
//         videoElement.muted = false; // Unmute the video
//     };

//     const pauseVideo = (videoElement) => {
//         videoElement.pause();
//     };

//     return (
//         <div
//             className='relative -mt-14 z-0'
//             style={{
//                 clipPath: 'polygon(0 6%, 80% 0, 100% 5%, 100% 100%, 0 100%)'
//             }}
//         >
//             <img
//                 src={BgImg}
//                 alt="img"
//                 className='object-cover'
//             />
//             <div
//                 className='absolute inset-0 z-10 pt-[12%]'
//                 style={{
//                     background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.97) 20.35%)'
//                 }}
//             >
//                 <div className='container text-center space-y-12 flex flex-col items-center'>
//                     <p className='text-[55px] font-extrabold uppercase'>we are camel run</p>
//                     <p className='text-xl text-textGrey font-medium'>
//                         Camel Run is being built as an integrated digital platform of tokenized camels that will introduce the excitement<br /> of racing to a new tech-driven and culturally distinct generation.
//                     </p>
//                     <div className='relative w-[1094px] h-[576px] flex items-center justify-center'>
//                         <img src={Frame1} alt="img" className='absolute w-[1092px] max-h-[588px]'/>
//                         <img src={Frame2} alt="img" className='absolute w-[1092px] max-h-[588px]'/>
//                         <video
//                             ref={videoRef}
//                             src={TrailerVideo}
//                             className='w-[1072px] max-h-[564px] object-cover'
//                         ></video>
//                     </div>
//                 </div>
//             </div>

//             <div
//                 className='absolute w-[1168px] h-[53.7px] bg-gradient bg-cover top-0 right-[20%] z-20'
//                 style={{
//                     clipPath: 'polygon(0 0, 100% 0, 96% 80%, 0 100%)'
//                 }}
//             >

//             </div>
//         </div>
//     )
// }

// export default Welcome

import React, { useEffect, useRef } from 'react';
import BgImg from '../../../assets/home/AboutImg.png';
import TrailerVideo from '../../../assets/videos/CamelRun_Trailer.mp4';
import Frame1 from '../../../assets/home/AboutFrame1.png';
import Frame2 from '../../../assets/home/AboutFrame2.png';

const Welcome = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    playVideoWithSound(videoElement);
                } else {
                    pauseVideo(videoElement);
                }
            });
        };

        const intersectionObserver = new IntersectionObserver(handleIntersection, {
            threshold: 0.5, // Adjust the threshold as needed
        });

        intersectionObserver.observe(videoElement);

        return () => {
            intersectionObserver.unobserve(videoElement);
        };
    }, []);

    const playVideoWithSound = (videoElement) => {
        videoElement.play().catch((error) => {
            // Handle play() promise rejection (autoplay policy restriction)
            console.log('Error playing video:', error);
        });
        videoElement.muted = false; // Unmute the video
    };

    const pauseVideo = (videoElement) => {
        videoElement.pause();
    };

    return (
        <div className='relative -mt-14 z-0' style={{ clipPath: 'polygon(0 6%, 80% 0, 100% 5%, 100% 100%, 0 100%)' }}>
            <img src={BgImg} alt='img' className='object-cover' />
            <div
                className='absolute inset-0 z-10 pt-[12%]'
                style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.97) 20.35%)',
                }}
            >
                <div className='container text-center space-y-12 flex flex-col items-center'>
                    <p className='text-[55px] font-extrabold uppercase'>we are camel run</p>
                    <p className='text-xl text-textGrey font-medium'>
                        Camel Run is being built as an integrated digital platform of tokenized camels that will introduce the
                        excitement<br /> of racing to a new tech-driven and culturally distinct generation.
                    </p>
                    <div className='relative w-[1094px] h-[576px] flex items-center justify-center'>
                        <img src={Frame1} alt='img' className='absolute w-[1092px] max-h-[588px]' />
                        <img src={Frame2} alt='img' className='absolute w-[1092px] max-h-[588px]' />
                        <video ref={videoRef} src={TrailerVideo} className='w-[1072px] max-h-[564px] object-cover'></video>
                    </div>
                </div>
            </div>
            <div className='absolute w-[1168px] h-[53.7px] bg-gradient bg-cover top-0 right-[20%] z-20' style={{ clipPath: 'polygon(0 0, 100% 0, 96% 80%, 0 100%)' }}></div>
        </div>
    );
};

export default Welcome;