import React, { useRef, useState } from 'react'
import SectionHeader from './extra/SectionHeader'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Ourservice = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const videoRef = useRef(null);
   
    const [unmutedId, setUnmutedId] = useState(null);

    const reelsData = {
        tab1: [
            { id: 1, video: '/bbd/1.mp4' },
            { id: 2, video: '/bbd/2.mp4' },
            { id: 3, video: '/bbd/3.mp4' },
            { id: 4, video: '/bbd/4.mp4' },
        ],
        tab2: [
            { id: 5, video: '/bbd/5.mp4' },
            { id: 6, video: '/bbd/6.mp4' },
            { id: 7, video: '/bbd/7.mp4' },
            { id: 8, video: '/bbd/8.mp4' },
        ],
        tab3: [
            { id: 9, video: '/bbd/9.mp4' },
            { id: 10, video: '/bbd/10.mp4' },
            { id: 11, video: '/videos/reel5.mp4' },
            { id: 12, video: '/videos/reel6.mp4' },
        ],
        tab4: [
            { id: 13, video: '/videos/reel5.mp4' },
            { id: 14, video: '/videos/reel6.mp4' },
            { id: 15, video: '/videos/reel5.mp4' },
            { id: 16, video: '/videos/reel6.mp4' },
        ],
        tab5: [
            { id: 17, video: '/videos/reel5.mp4' },
            { id: 18, video: '/videos/reel6.mp4' },
            { id: 19, video: '/videos/reel5.mp4' },
            { id: 20, video: '/videos/reel6.mp4' },
        ],
        tab6: [
            { id: 21, video: '/videos/reel5.mp4' },
            { id: 22, video: '/videos/reel6.mp4' },
            { id: 23, video: '/videos/reel5.mp4' },
            { id: 24, video: '/videos/reel6.mp4' },
        ],
    };
    const reels = reelsData[activeTab] || [];

    const tabs = [
        { id: 'tab1', label: 'UGC Video' },
        { id: 'tab2', label: 'TVC/DVC' },
        { id: 'tab3', label: 'SMM' },
        { id: 'tab4', label: 'Video production' },
        { id: 'tab5', label: 'Porsonal Branding' },
        { id: 'tab6', label: 'Influencer Marketing' },
    ];

    const handleMuteToggle = (id) => {
        setUnmutedId((prevId) => (prevId === id ? null : id));
    };
    return (
        <div className="py-[40px]" id='ourwork'>
            <div className='container mx-auto' >
                <SectionHeader
                    title="Our work"
                    subtitle="“Client Feedback & Testimonials”"
                />
                <div className="poppins_thin">
                    <div className="w-full mx-auto mt-8 max-w-7xl">
                        {/* Tab Buttons */}
                        <div className="flex gap-3 pb-2 overflow-auto lg:justify-evenly">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`lg:w-full lg:py-3 px-7 lg:px-0 transition-all ease-in-out duration-300 ${activeTab === tab.id
                                        ? 'border-2 border-primary rounded-full text-primary font-semibold'
                                        : 'text-white bg-primary  transition-all ease-in-out duration-300 border border-primary rounded-full hover:text-primary hover:bg-transparent cursor-pointer'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}

                        <div className="py-10">
                            {tabs.map((tab) =>
                                activeTab === tab.id ? (
                                    <div
                                        key={tab.id}
                                        className="relative flex flex-col gap-y-7 lg:gap-7 lg:flex-row"
                                    >
                                        <Swiper
                                            spaceBetween={16}
                                            slidesPerView={4}
                                            navigation={{ nextEl: '#custom-next', prevEl: '#custom-prev' }}// ✅ Enables arrows
                                            modules={[Navigation]}
                                            breakpoints={{
                                                320: { slidesPerView: 1 },
                                                640: { slidesPerView: 2 },
                                                768: { slidesPerView: 3 },
                                                1024: { slidesPerView: 4 },
                                            }}
                                            className="w-full"
                                        >
                                            {reels.map((item) => (
                                                <SwiperSlide key={item.id}>
                                                    <div className="relative w-full rounded-xl bg-black/70">
                                                        <video
                                                            src={item.video}
                                                            ref={videoRef}
                                                            autoPlay

                                                            loop
                                                            muted={unmutedId !== item.id}
                                                            className="object-cover h-[500px] mx-auto lg:w-[20rem] rounded-xl"
                                                        />
                                                        <button onClick={() => handleMuteToggle(item.id)}
                                                            className="absolute px-2 py-2 text-sm text-white bg-black rounded-full cursor-pointer top-4 right-4 bg-opacity-60">
                                                            {unmutedId === item.id ? <Volume2 size={20} /> : <VolumeX size={20} />}
                                                        </button>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                        <button className="absolute left-0 z-10 p-2 text-white -translate-y-1/2 rounded-full cursor-pointer custom-prev lg:-left-20 top-1/2 bg-black/60" id='custom-prev'>
                                            <ChevronLeft />
                                        </button>
                                        <button className="absolute right-0 z-10 p-2 text-white -translate-y-1/2 rounded-full cursor-pointer custom-next lg:-right-20 top-1/2 bg-black/60" id='custom-next'>
                                            <ChevronRight />
                                        </button>

                                    </div>
                                ) : null
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Ourservice